// Import the required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA01r55OhBoD_-lMSGTcTNny5jWHqroqkE",
  authDomain: "bestagon-4eda5.firebaseapp.com",
  projectId: "bestagon-4eda5",
  storageBucket: "bestagon-4eda5.appspot.com",
  messagingSenderId: "576359900133",
  appId: "1:576359900133:web:6308a82bcde5da1a7b850c"
};

// Initialize Firebase
const fire_app = initializeApp(firebaseConfig);
const db = getFirestore();

const grammar = String.raw`
start = m:header n:(br section)* o:(br subsection)* br? {return {...m, sections: Object.fromEntries(n.map(s => s[1])), sides: Object.fromEntries(o.map(s => s[1]))}}

header = m:param+ {return Object.fromEntries(m)}
section = m:h2 n:(subsection)* {return [m, Object.fromEntries(n)]}
subsection = m:h3 h:header? d:details? s:descs? lb* {return [m, {header: h, details: d, desc:s}]}
descs = m:(lb desc)* {return m.map(a => a[1])}
desc = "> " m:text {return m}
details = m:detail n:(lb detail)* {return [m, ...n.map(a => a[1])]}
detail = "- " m:text {return m}

h2 = "## " m:text lb+ {return m}
h3 = "### " m:text lb+ {return m}

param = k:label ":" v:text lb? {return [k,  v]}
label = m:[^\n:->]+ {return m.join('').trim()}
text = m:[^\n]+ {return m.join('').trim()}
br = lb* "---" lb*
lb = "\n"
`;

const parser = peg.generate(grammar);

const app = new Vue({
  el: '#app',
  data: {
    text: '',
  },
  computed: {
    data() {
      return parser.parse(this.text);
    },
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const userId = user.uid;
        const docRef = doc(db, 'users', userId);
        
        // Load the text data from Firestore on mount
        getDoc(docRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              this.text = docSnapshot.data().text;
              if (!this.text) throw new Error('empty document')
            } else throw new Error('document doesn\'t exist')
          })
          .catch((error) => {
            console.log('Error getting document:', error);
            // Fetch the Markdown file content
            fetch('/BestRest/resume.md')
              .then(response => response.text())
              .then(markdown => {
                app.text = markdown;
              });
          });
      } else {
        // User is not signed in
        window.location.replace('/BestRest');
      }
    });
  },
  watch: {
    text(newText) {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        // User is signed in
        const userId = user.uid;
        const docRef = doc(db, 'users', userId);
        
        // Save the updated text data to Firestore
        setDoc(docRef, { text: newText })
          .then(() => {
            // console.log('Text saved to Firestore!');
          })
          .catch((error) => {
            console.error('Error saving text:', error);
          });
      }
    },
  },
});