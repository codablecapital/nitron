// // /*
// //  * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// //  * See LICENSE in the project root for license information.
// //  */
// var config = {
//     apiKey: "AIzaSyAEHLZWNulj9mGgM1BnlArCrLBCoz8UjBw",
//     authDomain: "stokenstudio.firebaseapp.com",
//     databaseURL: "https://stokenstudio.firebaseio.com",
//     storageBucket: "gs://stokenstudio.appspot.com"
//   };
// firebase.initializeApp(config);


  
// // // The initialize function must be run each time a new page is loaded
// // Office.initialize = (reason) => {
// //     $('#sideload-msg').hide();
// //     $('#app-body').show();
// // };

// // function sendFile() {
// //     Office.context.document.getFileAsync(Office.FileType.Pdf,
// //         function(result) {
// //             if (result.status == "succeeded") {
// //                 var myFile = result.value;
// //                 var sliceCount = myFile.sliceCount;
// //                 app.showNotification("File size:" + myFile.size + " #Slices: " + sliceCount);
// //                 // Now, you can call getSliceAsync to download the files, as described in the previous code segment (compressed format).
                
// //                 myFile.closeAsync();
// //             }
// //             else {
// //                 app.showNotification("Error:", result.error.message);
// //             }
// //     }
// //     );    
// // }

// async function run() {
//     console.log("click outside");
//     return Word.run(async ctx => {
//             /**
//              * Insert your Word code here
//              */
//             //window.alert('asdfasdf')
//             //app.showNotification("title", "text");
            

//             var results = ctx.document.body.search("[XXCOMPANY]");      //Search for the text to replace
//             ctx.load(results);
//             ctx.sync().then(function () {
//                     for (var i = 0; i < results.items.length; i++) {
//                         results.items[i].insertHtml("Codable Capital, LLC", "replace");     //Replace the text HERE
//                     }
//             })
//             .then(ctx.sync)
//             // .then(function () {
//             //     var results = ctx.document.body.search("[Date]");      //Search for the text to replace
//             //     ctx.load(results);
        
//             //     return ctx.sync().then(function () {
//             //     for (var i = 0; i < results.items.length; i++) {
//             //         results.items[i].insertHtml(data.date, "replace");     //Replace the text HERE
//             //     }
//             //     })
//             //     .then(ctx.sync)
//             //     .then(function () {
//             //         var results = ctx.document.body.search("[Title | Company | Address | City | State | Zip]");      //Search for the text to replace
//             //         ctx.load(results);
        
//             //         return ctx.sync().then(function () {
                    
//             //             results.items[0].insertHtml(data.company1, "replace");     //Replace the text HERE
//             //             results.items[1].insertHtml(data.company2, "replace");     //Replace the text HERE
                    
//             //         })
//             //         .then(ctx.sync)
//             //         .then(function () {
//             //             var results = ctx.document.body.search("[Sender Name]");      //Search for the text to replace
//             //             ctx.load(results);
        
//             //             return ctx.sync().then(function () {
//             //             for (var i = 0; i < results.items.length; i++) {
//             //                 results.items[i].insertHtml(data.sender, "replace");     //Replace the text HERE
//             //             }
//             //             })
//             //             .then(ctx.sync)
//             //             .then(function () {
//             //             handleSuccess();
//             //             })
//             //         })
//             //     })
//             // })
//             .catch(function (error) {
//                 handleError(error);
//             })



//             // const range = context.document.getSelection();
            
//             // // Read the range text
//             // range.load('text');

//             // // Update font color
//             // range.font.color = 'blue';

//             await ctx.sync();
//             var i = 0;
//             var slices = 0;
//             var fileByte = [];

//             // await Office.context.document.getFileAsync(Office.FileType.Pdf, { sliceSize: 1048576 },
//             //     function(result) {
//             //         if (result.status == "succeeded") {
//             //             var myFile = result.value;
//             //             var sliceCount = myFile.sliceCount;
//             //             console.log("File size:" + myFile.size + " #Slices: " + sliceCount);
//             //             // Now, you can call getSliceAsync to download the files, as described in the previous code segment (compressed format).
                        
//             //             myFile.closeAsync();
//             //         }
//             //         else {
//             //             app.showNotification("Error:", result.error.message);
//             //         }
//             // }
//             // );
//             console.log("click inside");
//             await Office.context.document.getFileAsync(Office.FileType.Pdf, { sliceSize: 1048576 }, function (result) {
//                 if (result.status == "succeeded") {
//                     console.log("click inside");
//                     // If the getFileAsync call succeeded, then
//                     // result.value will return a valid File Object.
//                     var myFile = result.value;
//                     var slices = myFile.sliceCount;
//                     //console.log("File size:" + myFile.size + " #Slices: " + slices);
//                     // Iterate over the file slices.
//                     for (i = 0; i < slices; i++) {
//                         console.log("click inside1");
//                         var slice = myFile.getSliceAsync(i, function (result) {
//                             if (result.status == "succeeded") {
//                                 console.log("click inside3");
//                                 var storageRef = firebase.storage().ref();
//                                 var mountainsRef = storageRef.child('contract.pdf');
//                                 console.log("sdasfdasf"+result.value.data.length);
//                                 let bytes = new Uint8Array(result.value.data.length);
//                                 for (var i = 0; i < result.value.data.length; i++) {
//                                     bytes[i] = result.value.data[i];
//                                 }
//                                 mountainsRef.put(bytes).then(function(snapshot) {
//                                     console.log('Uploaded a raw string!');
//                                 });

//                             }
//                             else {  ``
//                                 //document.getElementById("result").innerText = result.error.message;
//                          }
//                         });
//                     }
//                     myFile.closeAsync();
//                 }
//                 else {
//                     //document.getElementById("result2").innerText = result.error.message;
//                 }
//             });
//         });
// }



// var init = function (reason) {
//     $('#sideload-msg').hide();
//     $('#app-body').show();
//     $(document).ready(function () {
//         $('#run').click(run);

//         // $('#set-subject').click(setSubject);
//         // $('#get-subject').click(getSubject);
//         // $('#add-to-recipients').click(addToRecipients);
//     });
// };
// // The initialize function must be run each time a new page is loaded
// Office.initialize = init;
// try {
//     if (!window.external.GetContext) {
//         console.log('Not in office context');
//         init();
//     }
// } catch (e) {
//     // when in office context unable to access external.
// }




/*
 * Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
(function() {
    "use strict";
    var config = {
        apiKey: "AIzaSyAEHLZWNulj9mGgM1BnlArCrLBCoz8UjBw",
        authDomain: "stokenstudio.firebaseapp.com",
        databaseURL: "https://stokenstudio.firebaseio.com",
        storageBucket: "gs://stokenstudio.appspot.com"
    };
    firebase.initializeApp(config);

    // The initialize function is run each time the page is loaded.
    Office.initialize = function (reason) {
        OfficeExtension.config.extendedErrorLogging = true;
        $(document).ready(function () {
            console.log("document ready");
            // Use this to check whether the new API is supported in the Word client.
            if (Office.context.requirements.isSetSupported("WordApi", "1.1")) {

                console.log('This code is using Word 2016 or greater.');

                // Load the story names from the service into the UI. 
                $('#sideload-msg').hide();
                $('#app-body').show();
                $('#run').click(run);

            }
            else {
                // Just letting you know that this code will not work with your version of Word.
                console.log('This add-in requires Word 2016 or greater.');
            }    
        });
    };

    async function run(){
        console.log("click outside");
        //saveDocument();
        // httpGetAsync('https://stokenstudio.firebaseapp.com/assets/safe.docx', function(response) {

        goRegister();
    }



    function saveDocument(remote_filename){
        Office.context.document.getFileAsync(Office.FileType.Compressed, { sliceSize: 1048576 }, function (result) {
            var i = 0;
            var slices = 0;
            if (result.status == "succeeded") {
                console.log("click inside");
                // If the getFileAsync call succeeded, then
                // result.value will return a valid File Object.
                var myFile = result.value;
                var slices = myFile.sliceCount;
                //console.log("File size:" + myFile.size + " #Slices: " + slices);
                // Iterate over the file slices.
                for (i = 0; i < slices; i++) {
                    console.log("click inside1");
                    var slice = myFile.getSliceAsync(i, function (result) {
                        if (result.status == "succeeded") {
                            console.log("click inside3");
                            var storageRef = firebase.storage().ref();
                            var mountainsRef = storageRef.child(remote_filename+'.docx');
                            console.log("sdasfdasf"+result.value.data.length);
                            let bytes = new Uint8Array(result.value.data.length);
                            for (var i = 0; i < result.value.data.length; i++) {
                                bytes[i] = result.value.data[i];
                            }
                            mountainsRef.put(bytes).then(function(snapshot) {
                                console.log('Uploaded a raw string!');
                            });

                        }
                        else {  ``
                            //document.getElementById("result").innerText = result.error.message;
                        }
                    });
                }
                myFile.closeAsync();
            }
            else {
                //document.getElementById("result2").innerText = result.error.message;
            }
        });
    }

    /*********************/
    /* Word JS functions */
    /*********************/
    
    // Using the Word JS API. Clears the current document and adds a base64 docx file to the document.
    function displayContents(myBase64) {
        Word.run(function (context) {

            // Create a proxy object for the document.
            var thisDocument = context.document;
            
            // Queue a command to clear the body contents. 
            thisDocument.body.clear();
            
            // Create a proxy object for the default selection. 
            var mySelection = thisDocument.getSelection();
            mySelection.insertFileFromBase64(myBase64, "replace");
            
            // Synchronize the document state by executing the queued commands, 
            // and return a promise to indicate task completion.
            return context.sync()
            .then(function () {
                // Now we want to get all of the content controls.
                //getAllContentControls();
            });
        })
        .catch(function (error) {
            console.log('Error: ' + JSON.stringify(error));
            if (error instanceof OfficeExtension.Error) {
                console.log('Debug info: ' + JSON.stringify(error.debugInfo));
            }
        });            
    }

    // Using the Word JS API. Gets all of the content controls that are in the loaded document. 
    function getAllContentControls() {
        Word.run(function (context) {

            // Create a proxy object for the document.
            var thisDocument = context.document;

            // Create a proxy object for the content control collection in the current document.
            var contentControls = thisDocument.contentControls;

            // Queue a command to load the tag and title properties of the content controls.
            contentControls.load('tag, title');

            // Synchronize the document state by executing the queued commands, 
            // and return a promise to indicate task completion.
            return context.sync(contentControls).then(function () {

                // Remove duplicate content controls and get back an array of objects
                // that represent unique fields in the add-in. For example, there may be 
                // many content controls titled "name" in the document, but we want all
                // content controls with the same name represented
                // by a single field in the add-in.
                var uniqueFields = removeDuplicateContentControls(contentControls);
                
                // Create HTML input fields based on the content controls.
                createFields(uniqueFields);
            })
        })
        .catch(function (error) {
            console.log('Error: ' + JSON.stringify(error));
            if (error instanceof OfficeExtension.Error) {
                console.log('Debug info: ' + JSON.stringify(error.debugInfo));
            }
        });  
    }

    // Using the Word JS API. Set the values from the INPUT elements into the associated
    // content controls to make the story silly. 
    function makeSillyHandler() {

        // We will only act on the INPUT elements. We assume that all INPUT
        // elements are mapped to a content control.
        var entryFields = document.getElementById("entryFields").querySelectorAll("input");

        // I don't like this. I'm loading the content controls again.
        Word.run(function (context) {

            // Create a proxy object for the document.
            var thisDocument = context.document;

            // Create a proxy object for the content control collection in the document.
            var contentControls = thisDocument.contentControls;

            // Queue a command to load the content controls collection with the tag and title properties.
            contentControls.load('tag, title');

            // Synchronize the document state by executing the queued commands, 
            // and return a promise to indicate task completion.
            return context.sync()
                .then(function () {

                    var i, j;
                
                    // For each input element, we want to map it to the associated
                    // content control.
                    for (i = 0; i < entryFields.length; i++) {
                        for (j = 0; j < contentControls.items.length; j++) {

                            // Matching content control tag with the tag set as the id on each input element.
                            // Set the content text to the text value of the INPUT element.
                            if (contentControls.items[j].tag === entryFields[i].id) {
                                contentControls.items[j].insertText(entryFields[i].value.trim(), Word.InsertLocation.replace)
                            }
                        }
                    }
                })
                // Synchronize the document state by executing the queued commands, 
                // and return a promise to indicate task completion.
                .then(context.sync);
        })
        .catch(function (error) {
            console.log('Error: ' + JSON.stringify(error));
            if (error instanceof OfficeExtension.Error) {
                console.log('Debug info: ' + JSON.stringify(error.debugInfo));
            }
        });    
    }
    
    // Handles the story selection in the add-in UI. Results in a call to the service to get
    // a docx file that contains a silly story. The silly story gets displayed in the Word UI.
    function selectStoryHandler() {
        
        // Form the URL to get the docx file. Need to remove the host information by slicing
        // off the host information beginning at ?_host_Info.
        var fileName = this.value;
        var currentUrl = location.href.slice(0, location.href.indexOf('?'));
        var getFileUrl = currentUrl + 'getfile?filename=' + fileName;

        // Call the helper to get the selected file then insert the file into Word.
        httpGetAsync(getFileUrl, function(response) {
            displayContents(response);
        });
    }

    /********************/
    /* UI functions     */
    /********************/
    
    // Gets a list of story file names from the service and then create entries in a drop down list box.
    // A user can choose a story once the drop down list box is populated.
    function getStoryNames() {

        // Form the URL to get the docx file list. Need to remove the host information by slicing
        // off the host information beginning at ?_host_Info.
        var currentUrl = location.href.slice(0, location.href.indexOf('?'));
        var getFileNamesUrl = currentUrl + 'getfilenames';
    
        // Call the helper to get the file list and then create the drop down 
        // list box from the results.
        httpGetAsync(getFileNamesUrl, function(rawResponse) {

            // Helper that processes the response so that we have an array of file names.
            var response = processResponse(rawResponse);
   
            // Get a handle on the empty drop down list box.
            var select = document.getElementById("selectStory");

            // Populate the drop down list box.       
            for(var i = 0; i < response.length; i++) {
                var opt = response[i];
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            };
            
            // Initialize stylized fabric UI for dropdown. This happens after we
            // populate the dropdown since the drop down values are copied by fabric.
            $(".ms-Dropdown").Dropdown();
        });
    }    
    
    // Creates HTML input fields based on the content control title and tag properties.
    // This method assumes that all content controls should be turned into HTML input fields
    // and that the duplicate have already been removed.
    function createFields(uniqueFields) {
        
        // Get the DIV where we will add out INPUT controls.
        var entryFields = document.getElementById("entryFields");

        // Clear the contents in case it has already been populated with INPUT controls.
        while (entryFields.hasChildNodes()) {
            entryFields.removeChild(entryFields.lastChild);
        }

        // Create a unique INPUT element for each unique content control tag.
        for (var i = 0; i < uniqueFields.length; i++) {
            entryFields.appendChild(document.createTextNode(uniqueFields[i].title + ': '));
            var input = document.createElement("input");
            input.type = "text";
            input.id = uniqueFields[i].tag;
            entryFields.appendChild(input);
            entryFields.appendChild(document.createElement("br"));
        }
    }
    
    /********************/
    /* Helper functions */
    /********************/
    
    // Helper that deduplicates the set of content controls. Content controls are
    // considered duplicates if they share the same tag.
    function removeDuplicateContentControls(contentControls) {
    
        var i,
            len = contentControls.items.length,
            uniqueFields= [],
            currentContentControl = {};
        
        for (i = 0; i < len; i++) {
            currentContentControl[contentControls.items[i].tag] = contentControls.items[i].title;
        }
        
        for (i in currentContentControl) {
            
            var obj = {
                tag: i,
                title: currentContentControl[i]
            };
            
            uniqueFields.push(obj);
        }
        
        return uniqueFields;
    }
    
    function firebaseGetAsync(remote_filename,callback){
        var storageRef = firebase.storage().ref(remote_filename);
        storageRef.getDownloadURL().then(function(theUrl,callback) {
            httpGetAsync(theUrl, callback);
        });
    }

    // Helper for calls to the service. 
    function httpGetAsync(theUrl, callback)
    {
        var request = new XMLHttpRequest();
        request.open("GET", theUrl, true);
        request.responseType = "blob";
        request.onreadystatechange = function() { 
            if (request.readyState === 4 && request.status === 200){
				// var uInt8Array = new Uint8Array(request.responseText);
				// var i = uInt8Array.length;
				// var binaryString = new Array(i);
				// while (i--)
				// {
				//   binaryString[i] = String.fromCharCode(uInt8Array[i]);
				// }
				// var data = binaryString.join('');
                // var base64 = window.btoa(data);
                // var reader  = new FileReader();

                // reader.onloadend = function () {
                //   console.log(reader.result); //this is an ArrayBuffer
                // }
                // reader.readAsArrayBuffer(file);
                var myReader = new FileReader();
                var buffer = "";
                myReader.readAsDataURL(request.response)
                myReader.addEventListener("loadend", function(e)
                {
                        buffer = e.srcElement.result;//arraybuffer object
                        var startIndex = buffer.indexOf("base64,"); // when you use the readAsDataURL method the base64 is included in the result, we just need to get that substring, and then insert it using office.js :)
                        var mybase64 = buffer.substr(startIndex + 7, buffer.length);
                        console.log("adsfsadfdsa"+ mybase64);
                        callback(mybase64);
                });
                //console.log("adsfsadfdsa"+ buffer);
                //callback(buffer);
			}
        }
        request.send(null);
    }
    // Helper that processes file names into an array. This is because the service returns
    // the file names as ["filename1.docx","filename2.docx","filename3.docx"].
    function processResponse(rawResponse) {
        
        // Remove quotes.
        rawResponse = rawResponse.replace(/"/g, "");
        
        // Remove opening brackets.
        rawResponse = rawResponse.replace("[", "");
        
        // Remove closing brackets.
        rawResponse = rawResponse.replace("]", "");
        
        // Return an array of file names.
        return rawResponse.split(',');
    }
})();
