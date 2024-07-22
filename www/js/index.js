$(document).ready(function() {
    // Tableau pour stocker les tâches en cours
    let currentTasks = [];
    // Tableau pour stocker les tâches terminées
    let completedTasks = [];
  
    // Fonction pour ajouter une tâche à la liste
    function addTask(taskText) {
        currentTasks.push(taskText);
        updateTaskList();
    }
  
    // Fonction pour mettre à jour la liste des tâches
    function updateTaskList() {
        $("#taskList").empty();
        $("#tacheFaites").empty();
  
        currentTasks.forEach(function(task, index) {
            const listItem = $("<li>").text(task);
            listItem.on("swiperight", function() {
                completeTask(index);
            });
            $("#taskList").append(listItem).listview('refresh');
        });
  
        completedTasks.forEach(function(task, index) {
            const listItem = $("<li>").text(task).css("text-decoration", "line-through");
            listItem.on("swipeleft", function() {
                uncompleteTask(index);
            });
            $("#tacheFaites").append(listItem).listview('refresh');
        });
    }
  
    // Fonction pour compléter une tâche
    function completeTask(index) {
        const completedTask = currentTasks.splice(index, 1)[0];
        completedTasks.push(completedTask);
        updateTaskList();
    }
  
    // Fonction pour remettre une tâche terminée dans les tâches en cours
    function uncompleteTask(index) {
        const uncompletedTask = completedTasks.splice(index, 1)[0];
        currentTasks.push(uncompletedTask);
        updateTaskList();
    }
  
    // Réinitialiser les tâches
    function resetTasks() {
        currentTasks = [];
        completedTasks = [];
        updateTaskList();
    }
  
    // Ajouter une tâche lors du clic sur le bouton "Ajouter"
    window.ajouterTache = function() {
        const taskText = $("#tache").val().trim();
        if (taskText !== "") {
            addTask(taskText);
            $("#tache").val("");
        }
    };
  
    // Réinitialiser les tâches lors du clic sur le bouton "Réinitialiser"
    window.reinitialiserTache = function() {
        resetTasks();
    };
  });
  