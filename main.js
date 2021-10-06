'use strict';

{
    // class Post {
    //     constructor(text) {
    //         this.text = text;
    //         this.likeCount = 0;
    //     }

    //     show() {
    //         console.log(`${this.text} - ${this.likeCount} likes`);
    //     }

    //     like() {
    //         this.likeCount++;
    //         this.show();
    //     }

    // 静的メソッド
    // thisは使えない
    //     static showInfo() {
    //         console.log('Post class version 1.0');
    //     }
    // }

    // const posts = [
    //     new Post('JavaScriptキモチエエエエエ'),
    //     new Post('Javaのおかげです。'),
    // ];

    // posts[1].like();
    // Post.showInfo();
}

{
    class Post { // 親クラス
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount} likes`);
        }

        like() {
            this.likeCount++;
            this.show();
        }
    }

    class SponsoredPost extends Post { // 子クラス
        constructor(text, sponsor) {
            // this.text = text;
            // this.likeCount = 0;
            super(text);
            this.sponsor = sponsor;
        }

        show() {
            // console.log(`${this.text} - ${this.likeCount} likes`);
            super.show();
            console.log(`... sponsored by ${this.sponsor}`);
        }

        // like() {
        //     this.likeCount++;
        //     this.show();
        // }
    }

    const posts = [
        new Post('JavaScript'),
        new Post('PHP'),
        new SponsoredPost('Javaのオブジェクト指向プログラミングの考え方'),
    ];

    posts[2].show();
    posts[2].like();
}