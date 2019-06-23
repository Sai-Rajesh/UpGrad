function fullPost(){
  window.location.href="./post.html";
}

function onDeletePost(){
  document.getElementById('deletePostPrompt').style.display='block';
}


function onCloseDeleteClicked() {
  document.getElementById('deletePostPrompt').style.display='none';
}

var myPost;

myPost = [
          {
            author: "Rajesh", 
            title: "Hello there this is Post 1", 
            blogContent: "Lovely Professional University (LPU) is a Private University in North India created under the Punjab State Private University Act 2005 and recognized by UGC[2] under Section 2(f) of UGC [2]Act 1956. LPU has been offering more than 200 programs under 40+ disciplines."
          },
          {
            author: "Ifrah1", 
            title: "Lovely Professional University (LPU) is a Private University in North India created under the Punjab State Private University Act 2005 and recognized by UGC[2] under Section 2(f) of UGC [2]Act 1956. LPU has been offering more than 200 programs under 40+ disciplines." 	
            }
];

for (i=0; i<myPost.length; i++) {
	document.createElement('p');
}
