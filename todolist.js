    $(document).ready(
        function(){
            $('#button').click(
            function(){
                var addList =
                    $('input[name=task]').val();
                $("#currentTasks").append('<li>' + addList + '<li>');
            
            });
            
        });