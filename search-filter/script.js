$('#search').on('input', function() {
            const val = $(this).val().toUpperCase();
            $(".post").each(function() {

                if ($(this).html().toUpperCase().indexOf(val) !== -1) {
                    $(this).show()
                } else {
                    $(this).hide()

                }
            });
        })