/*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
    // $('.set-bg').on('change',alert('hello'));
    // $('.set-bg').each(function () {
    //     var bg = $(this).data('setbg');
    //     $(this).css('background-image', 'url(' + bg + ')');
    // });
    // $(function () {
    //     $('.set-bg').each(function () {
            // $(this).on('change',alert())

        // })
        //   if ($(this).children('option:selected').data('x') == 'y') {
        //       $("#result").html($(this).children('option:selected').attr('data-info'));
        //   }
        //   else
        //       $("#result").html("");
        //  });
    //  });