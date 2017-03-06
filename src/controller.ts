// include 'proxy'
// include 'viewmodel'
// include 'ui'

// setup: dependency injection
//   proxy
//   viewmodel

// init folders
//   proxy: get_folders
//   viewmodel: create the folders

// initial state
// call proxy to get data (state)
//   proxy: get_initial
//   viewmodel: for each task: create task

// update_state
//   proxy: update_state
//   viewmodel: update_state

// update_data
//   proxy: update_data
//   viewmodel: update_data

// ui.event: task dropped in folder
//   update_state(task, folder src, folder dst)

// ui.event: modify task
//   update_data

// proxy.event: update task
//   update_data