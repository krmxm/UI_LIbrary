import './lib/lib';

// $('#first').on('click', function() {
//         $('div').eq(1).fadeToggle(800);
// });

// $('[data-count="second"]').on('click', function() {
//         $('div').eq(2).fadeToggle(800);
// });

// $('button').eq(2).on('click', function() {
//         $('.w-500').fadeToggle(800);
// });

$('#trigger').click(() => $('#trigger').createModal({
        text: {
                title: 'Modal title',
                body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit cum modi, ad atque, voluptatibus unde culpa numquam assumenda enim dicta, minus eligendi mollitia reiciendis doloribus sapiente ut alias praesentium. Error.'
        },
        btns: {
                count: 2,
                settings: [
                        [
                                'Close',
                                ['btn-danger', 'mr-10'],
                                true
                        ],
                        [
                                'Save Changes',
                                ['btn-success'],
                                false,
                                () => {
                                        alert('Данные сохранены');
                                }
                        ]
                ]
        }
}));