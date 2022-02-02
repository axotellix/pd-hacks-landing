$(() => {
    
    // PLUGINS  & WIDGETS
     // init > tabs
    $('#tabs').tabs();

     // init > lightbox
     $('a[data-rel^=lightcase]').lightcase();

    // open > modal window
    $('a.jquery').click(() => {
        $('div.jq-modal').fadeIn().css('display', 'flex');
    });
    // close > modal window
    $('div.jq-modal').on('click', function(e) {
        if(e.target.className == "jq-modal") {
            $(this).fadeOut();
        }
    });


    // [ OBJECT WITH FUNCTIONS ]
    JQ = {
        jq_fadeOut() {
            $('div.jq-modal').fadeOut();
        },
        jq_trigger() {
            $('button.jq-options').eq(0).trigger('click');
        },
        jq_addClass(obj) {
            $(obj).addClass('button-light');
        },
        jq_toggleClass(obj) {
            $(obj).toggleClass('button-light');
        },
        jq_click(obj) {
            $(obj).find('span').text('кнопка нажата !');
        },
        jq_find(obj) {
            $(obj).find('span').remove();
        },
        jq_css(obj) {
            $(obj).css({'backgroundColor': '#247FE7', 'color': '#fff'}).find('span').text('стили изменены');
        },
        jq_filter(obj) {
            let class_name = $(obj).attr('class');
            $('button.' + class_name).closest('ul').find('li').filter(':nth-child(5)').find('button').css({'background': 'Orange', 'color': '#fff'});
        },
        jq_attr(obj) {
            $(obj).attr('disabled', 'disabled').find('span').text('кнопка отключена');
        },
        jq_hide(obj) {
            $(obj).hide();
        },
        jq_show(obj) {
            $('#jq_hide').show();
        },
        jq_wrap(obj) {
            $(obj).find('span').wrap('<em></em>');
        },
        jq_prepend(obj) {
            let new_button = "<li><button id = 'jq_none' class = 'jq-options'>Новая кнопка:<span>была добавлена вами</span></button></li>";
            $(obj).parent().parent().prepend(new_button);
        },
        jq_append(obj) {
            let new_button = "<li><button id = 'jq_none' class = 'jq-options'>Новая кнопка:<span>была добавлена вами</span></button></li>";
            $(obj).parent().parent().append(new_button);
        },
        jq_html(obj) {
            let new_html = "<p>Теперь здесь просто параграф</p>";
            console.log(obj);
            $(obj).html(new_html);
        }
    };

    // call > function according to action in its "id"
    $('button.jq-options').on('click', function() {
        let action = $(this).attr('id');    // get > action to do
        JQ[action](this);                   // call > that action
    });

});