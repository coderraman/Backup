//Request
//Response
// Event Loop 
//Blocking Task
//Non-Blocking Task
//Thread Pool
//Event queue

//These are parts of Node.js Architecute Machenisham

//Blocking task is Sync.. Task
//Non-Blocking task is ASync.. Task it give result in Callback

//Note: By deafault threadPool Size is 4 it can increase by core of CPU

// Request -> went in Event Queue -> Check request by Event Loop -> Then send in Blocking and Non-blocking Task -> then if task is non-blocking so there will be a proccess and send the response by Event Loop... But if there is blocking Task so request so ---> went in Thread Pool ---> and then thread pool will check and went to Event loop for Printing..