$( document ).ready(function() {
    var pageList = [
    'index.html',
    'test1.html',
    'test2.html',
];

    current=$(location).attr('pathname').substr($(location).attr('pathname').lastIndexOf("/")+1); // get current page: just last part - page name and extension
    if($.inArray(current, caseList)!==-1) { //check if it is in array
        index=$.inArray(current, caseList);
    }
    //navigate thorough pages...
    $( ".next" ).click(function() {
    if(index<caseList.length){
    next=caseList[index+1];
    window.location.href = next;
    }
    });

    $( ".prev" ).click(function() {
    if(index>=0){
    prev=caseList[index-1];
    window.location.href = prev;
    }
    });

    });