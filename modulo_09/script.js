$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const taskInput = $('#tasksInput').val();
        const tasksList = $('#tasksList');
        const newTask = $(`<li>${taskInput}</li>`);

        newTask.appendTo(tasksList);
        $('#tasksInput').val('');

        $(newTask).click(function () {
            $(this).toggleClass('task_done');
        });
    });
});
