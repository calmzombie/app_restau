// on vérifie que notre navigateur supporte les service workers
if('serviceWorker' in navigator) {
  // si oui, on essaie d'enregistrer notre service worker
  try {
    navigator.serviceWorker.register('service-worker.js');
  }
  catch (error) {
    // si ça échoue, on écrit un message d'erreur
    console.log('Error while registering the service worker.');
    console.log(error);
  }
}

$("#menuham").click(function(){
  $("#burgermenu").fadeIn("slow");
});

$("section").click(function(){
  $("#burgermenu").fadeOut("slow");
});
