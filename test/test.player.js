var p = new _mu.Player({
        mute: true,
        mode: 'list',
        absoluteUrl: false
    }),
    mp3Path = '/st/mp3/';

window.muplayer = p;

suite('player', function() {
    setup(function() {
        p.add([
            mp3Path + 'rain.mp3'
        ]);
    });

    suite('#play()', function() {
        test('播放开始后会派发playing事件', function(done) {
            p.on('playing', function() {
                assert.ok(true);
                done();
            });
            p.play();
        });
    });

    suite('#setCur()', function() {
        test('通过setCur设置sid后，可通过getCur取回该sid', function() {
            p.add([
                '1', '2', '3'
            ]).setCur('2');
            assert.equal('2', p.getCur());
        });

        test('重置播放列表后可以通过setCur设置到指定sid', function() {
            p.add([
                '1', '2', '3', '4', '5'
            ]).setCur('3');
            assert.equal('3', p.getCur());
            p.reset().add([
                '1', '2', '3', '4', '5'
            ]).setCur('3');
            assert.equal('3', p.getCur());
        });
    });

    teardown(function() {
        p.off().reset();
    });
});
