// import Vue from 'vue';
// import HTTP from '../http';
//  export default {
//   namespaced: true,
//   state: {
//     entities: [],
//     description: null,
//     // isConfirmDisplayed: false,
//     taskToDeleteId: null,
//   },
//   actions: {
//     fetchTasks({ commit }) {
//       HTTP().get(`tasks')
//         .then(({ data }) => {
//           commit('setTasks', data);
//         })
//         .catch((err) => {
//           console.log('err', err);
//         });
//     },
//     updateTask({ commit }, task) {
//       HTTP().patch(`tasks/${task.id}`, task)
//         .then(() => {
//           commit('setTaskEditMode', {
//             task,
//             isEdit: false,
//           });
//         })
//         .catch((err) => {
//           console.log('err', err);
//         });
//     },
//     createTask({ commit, state}) {
//         commit('setCreateTaskError', false);
//         HTTP().post('tasks', {
//           title: state.title,
//         })
//         .then(({ data }) => {000000
//           commit('addTask', data);
//         })
//         .catch(() => {
//             commit('setCreateTaskError', true);
//         });
//     },
//     deleteTask({  commit, state }) {
//       HTTP().delete(`tasks/${state.taskToDeleteId}`)
//         .then(() => {
//           commit('deleteTask', state.taskToDeleteId);
//         })
//         .catch((err) => {
//             commit('setDeleteTaskError', true);
//         });
//     },
//   },
//   getters: {
//     selectedTask(state) {
//       return state.entities.find((task) => {
//         return task.id === state.selectedTaskId;
//       }) 
//     },
//   },
//   mutations: {
//     setTasks(state, tasks) {
//       state.entities = tasks;
//     },
//     toggleCompleted(state, task) {
//       Vue.set(task, 'completed', !task.completed);
//     },
//     addTask(state, task) {
//       state.entities.push(task);
//     },
//     setTaskEditMode(state, { task, isEdit }) {
//       Vue.set(task, 'isEdit', isEdit);
//     },
//     deleteTask(state, taskId) {
//       state.entities.splice(
//         state.entities.findIndex((task) => task.id === taskId),
//         1,
//       );
//     },
//     setTaskToDeleteId(state, taskToDeleteId) {
//       state.taskToDeleteId = taskToDeleteId;
//     },
//     setDescription(state, description) {
//       state.description = description;
//     },
//     setTaskDescription(state, { task, description }) {
//       task.description = description;
//     },
//     setConfirmDisplayed(state, isConfirmDisplayed) {
//       state.isConfirmDisplayed = isConfirmDisplayed;
//     },
//   },
// };