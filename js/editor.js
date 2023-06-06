new Vue({
  el: '#app',
  data: {
    formData: {
      social: [],
      testScores: [],
      emails: [],
      schools: [],
      jobs: [],
      clubs: [],
      services: [],
      languages: [],
      projects: [],
      recommenders: [],
      sections: [],
      notes: [],
      hsCourses: [],
      uniCourses: [],
      tools: []
    }
  },
  methods: {
    addSocial() {
      this.formData.social.push({
        link: '',
        logo: ''
      });
    },
    removeSocial(index) {
      this.formData.social.splice(index, 1);
    },
    addScore() {
      this.formData.testScores.push({
        name: '',
        score: null,
        date: '',
        link: ''
      });
    },
    removeScore(index) {
      this.formData.testScores.splice(index, 1);
    },
    addEmail() {
      this.formData.emails.push({
        email: '',
        notes: []
      });
    },
    removeEmail(index) {
      this.formData.emails.splice(index, 1);
    },
    addNote(email) {
      email.notes.push('');
    },
    removeNote(email, noteIndex) {
      email.notes.splice(noteIndex, 1);
    },
    addSchool() {
      this.formData.schools.push({
        name: '',
        start: '',
        end: '',
        transcript: '',
        degree: '',
        diploma: '',
        notes: []
      });
    },
    removeSchool(index) {
      this.formData.schools.splice(index, 1);
    },
    addSchoolNote(school) {
      school.notes.push('');
    },
    removeSchoolNote(school, noteIndex) {
      school.notes.splice(noteIndex, 1);
    },
    addJob() {
      this.formData.jobs.push({
        role: '',
        company: '',
        start: '',
        end: '',
        hours_week: null,
        social_desc: '',
        professional_desc: ''
      });
    },
    removeJob(index) {
      this.formData.jobs.splice(index, 1);
    },
    addClub() {
      this.formData.clubs.push({
        org: '',
        role: '',
        start: '',
        end: '',
        hours_week: null,
        desc: '',
        sections: []
      });
    },
    removeClub(index) {
      this.formData.clubs.splice(index, 1);
    },
    addSection(club) {
      club.sections.push('');
    },
    removeSection(club, sectionIndex) {
      club.sections.splice(sectionIndex, 1);
    },
    addService() {
      this.formData.services.push({
        org: '',
        role: '',
        start: '',
        end: '',
        hours_week: null,
        desc: ''
      });
    },
    removeService(index) {
      this.formData.services.splice(index, 1);
    },
    addLanguage() {
      this.formData.languages.push({
        name: '',
        level: ''
      });
    },
    removeLanguage(index) {
      this.formData.languages.splice(index, 1);
    },
    addProject() {
      this.formData.projects.push({
        title: '',
        start: '',
        end: '',
        hours_week: null,
        desc: ''
      });
    },
    removeProject(index) {
      this.formData.projects.splice(index, 1);
    },
    addRecommender() {
      this.formData.recommenders.push({
        name: '',
        position: '',
        email: '',
        phone: ''
      });
    },
    removeRecommender(index) {
      this.formData.recommenders.splice(index, 1);
    },
    addNote() {
      this.formData.notes.push({
        text: '',
        notes: []
      });
    },
    removeNote(index) {
      this.formData.notes.splice(index, 1);
    },
    addSubNote(note) {
      note.notes.push('');
    },
    removeSubNote(note, subNoteIndex) {
      note.notes.splice(subNoteIndex, 1);
    },
    addHsCourse() {
      this.formData.hsCourses.push({
        course: '',
        semester: '',
        grade_lvl: null,
        grade: '',
        desc: ''
      });
    },
    removeHsCourse(index) {
      this.formData.hsCourses.splice(index, 1);
    },
    addUniCourse() {
      this.formData.uniCourses.push({
        course: '',
        course_code: '',
        semester: '',
        credit_hrs: null,
        grade: '',
        desc: ''
      });
    },
    removeUniCourse(index) {
      this.formData.uniCourses.splice(index, 1);
    },
    addTool() {
      this.formData.tools.push({
        name: '',
        level: ''
      });
    },
    removeTool(index) {
      this.formData.tools.splice(index, 1);
    },
    submitForm() {
      // Code to submit the form data
    }
  }
});
