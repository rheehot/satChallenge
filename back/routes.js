// global
const JOIN = "/join"
const LOGIN = "/login"
// const FAQ = "/faq"
// const ABOUT = "/about"

// user
const USERS = "/users"
const ME = "/me"
const USER_DETAIL = "/:id"
const USER_EDIT = "/edit-profile"
const CHANGE_PASSWORD = "/change-password"

// challenge
const CHALLENGES = "/"
const CREATE_CHALLENGE = "/create"
const READ_CHALLENGE = "/:id"
const UPDATE_CHALLENGE = "/:id/update"
const DELETE_CHALLENGE = "/:id/delete"
const JOIN_CHALLENGE = "/:id/join"

// quiz
const CREATE_QUIZ = "/create"
const READ_QUIZ = "/:id"
const UPDATE_QUIZ = "/update"
const DELETE_QUIZ = "/:id/delete"

// subMitQuiz
const CREATE_SUBMIT_QUIZ = "/create"
const READ_SUBMIT_QUIZ = "/:id"
const UPDATE_SUBMIT_QUIZ = "/:id/update"
const DELETE_SUBMIT_QUIZ = "/:id/delete"

const routes = {
  // global
  join: JOIN,
  login: LOGIN,
  
  // user
  users: USERS,
  me : ME,
  userDetail: id => {
    if (id)
      return `/user/${id}`
    return USER_DETAIL
  },
  userEdit: USER_EDIT,
  changePassword: CHANGE_PASSWORD,

  // challenge
  challenges: CHALLENGES,
  createChallenge: CREATE_CHALLENGE,
  readChallenge: id => {
    if (id)
      return `/${id}`
    return READ_CHALLENGE
  },
  updateChallenge: id => {
    if (id)
      return `/${id}/update`
    return UPDATE_CHALLENGE
  },
  deleteChallenge: id => {
    if (id)
      return `/${id}/delete`
    return DELETE_CHALLENGE
  },
  joinChallenge : id => {
    if(id)
      return `/${id}/join`
    return JOIN_CHALLENGE
  },

  // SUBMIT_quiz
  createQuiz : CREATE_QUIZ,
  readQuiz : id => {
    if (id)
      return `/${id}`
    return READ_QUIZ
  },
  updateQuiz : UPDATE_QUIZ,
  deleteQuiz : id => {
    if (id)
      return `/${id}/delete`
    return DELETE_QUIZ
  },

  //submitQuiz
  createSubmitQuiz: CREATE_SUBMIT_QUIZ,
  readSubmitQuiz: id => {
    if (id)
      return `/${id}`
    return READ_SUBMIT_QUIZ
  },
  updateSubmitQuiz: id => {
    if (id)
      return `/${id}/update`
    return UPDATE_SUBMIT_QUIZ
  },
  deleteSubmitQuiz: id => {
    if (id)
      return `/${id}/delete`
    return DELETE_SUBMIT_QUIZ
  },
};


export default routes;