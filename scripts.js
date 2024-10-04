
document.addEventListener('DOMContentLoaded', function() {
    const categories = [
        "C0制御区域",
        "C1制御区域",
        "CJK互換形",
        "CJK互換漢字",
        "CJK統合漢字",
        "CJK部首補助",
        "CJK統合漢字拡張A",
        "CJKの筆画（漢字の筆画）",
        "CJK互換用文字（組み文字）",
        "CJKの記号及び句読点（蘇州数字を含む）",
        "IPA拡張（国際音声字母）",
        "矢印",
        "囲みCJK文字・月",
        "小字形",
        "ひらがな",
        "カタカナ",
        "バリ文字",
        "ンコ文字",
        "数学記号",
        "私用領域",
        "縦書き形",
        "罫線素片",
        "通貨記号",
        "空白範囲2FE0",
        "補助矢印A",
        "補助矢印B",
        "イ文字部首",
        "シリア文字",
        "ジャワ文字",
        "スンダ文字",
        "ターナ文字",
        "チャム文字",
        "パスパ文字",
        "マンダ文字",
        "ヴァイ文字",
        "一般句読点",
        "幾何学模様",
        "補助句読点",
        "ラテン文字1補助",
        "装飾記号（ITCツァップ・ディンバッツの記号等）",
        "アラビア文字",
        "オリヤー文字",
        "クメール文字",
        "グルジア文字",
        "サマリア文字",
        "シンハラ文字",
        "チベット文字",
        "ハヌノオ文字",
        "ハングル字母",
        "ブヒッド文字",
        "ブロック要素",
        "レプチャ文字",
        "声調修飾文字",
        "補助数学記号",
        "音声記号拡張",
        "アルメニア文字",
        "エチオピア文字",
        "キリル文字補助",
        "グルムキー文字",
        "シリア文字補助",
        "スンダ文字補助",
        "タグバヌワ文字",
        "チェロキー文字",
        "ヴェーダ用拡張",
        "上付き・下付き",
        "制御機能用記号",
        "新タイ・ロ文字",
        "ラテン文字拡張A",
        "ビルマ文字拡張A（ミャンマー文字拡張A）",
        "キリル文字拡張A（古代教会スラヴ語合成用）",
        "アラビア表示形A（独立形・語頭形・語中形・語末形、2字以上の合成済み表示形等）",
        "ラテン文字拡張B",
        "キリル文字拡張B（古キリル文字等）",
        "ビルマ文字拡張B（ミャンマー文字拡張B）",
        "アラビア表示形B（独立形・語頭形・語中形・語末形等）",
        "キリル文字拡張C",
        "ラテン文字拡張C（ショナ語等）",
        "ラテン文字拡張D（ゲール文字等を含む）",
        "ラテン文字拡張E（ドイツ語方言表記用等）",
        "光学文字認識（OCR記号）",
        "アラビア文字補助",
        "グルジア文字拡張",
        "タイ・ヴェト文字",
        "ハングル音節文字",
        "漢字構成記述文字",
        "音声記号拡張補助",
        "その他の数学記号A",
        "アラビア文字拡張A",
        "基本ラテン文字（ASCII互換）",
        "ハングル字母拡張A（古ハングル初声子音）",
        "その他の数学記号B",
        "アラビア文字拡張B",
        "ハングル字母拡張B（古ハングルの中声母音及び終声子音）",
        "エチオピア文字補助",
        "クメール文字用記号",
        "前進を伴う修飾文字",
        "半記号（合成可能）",
        "エチオピア文字拡張A（グムズ語等）",
        "サウラーシュトラ文字",
        "シロティ・ナグリ文字",
        "易経記号（六十四卦）",
        "注音字母（注音符号）",
        "統合カナダ先住民音節",
        "タイ文字（シャム文字）",
        "デーヴァナーガリー文字",
        "漢文用記号（返り点等）",
        "その他の記号及び矢印（ARIB外字含む）",
        "オガム文字（オーム文字）",
        "バムン文字（バムム文字）",
        "統合カナダ先住民音節拡張",
        "蒙古文字（モンゴル文字）",
        "康熙部首（康煕字典分類の214部首）",
        "イ文字（彝文字、規範彝文）",
        "キリル文字（キリール文字）",
        "ギリシア文字及びコプト文字",
        "タミル文字（タミール文字）",
        "テルグ文字（テルグー文字）",
        "バタク文字（バタック文字）",
        "ブギス文字（ロンタラ文字）",
        "共通インド数字に準じるもの",
        "文字様記号（数学用記号等）",
        "その他の記号（黄道十二宮、ARIB外字ほか）",
        "チェロキー文字補助（小文字）",
        "ビルマ文字（ミャンマー文字）",
        "リンブ文字（キランティ文字）",
        "ルジャン文字（レジャン文字）",
        "囲み英数字（歯式記号を含む）",
        "字形選択子（異体字セレクタ）",
        "グラゴル文字（グラゴール文字）",
        "マニプール文字（メイテイ文字）",
        "エチオピア文字拡張（メエン語等）",
        "ベンガル文字（アッサム文字兼用）",
        "特殊用途文字（振り仮名制御用等）",
        "タガログ文字（古代タガログ語文字）",
        "マラヤーラム文字（マラヤラム文字）",
        "ギリシア文字拡張（ポリトニック表記）",
        "グルジア文字補助（フツリ体の小文字）",
        "タイ・ナ文字（傣哪文字、徳宏傣文字）",
        "ダイアクリティカルマーク（合成可能）",
        "ラオ文字（ラオス文字、ラーオ文字））",
        "ラーンナー文字（タム文字、八百文字）",
        "その他の技術用記号（幾何公差の記号、APL記号、キーボード記号、歯式記号ほか）",
        "カタカナ拡張（アイヌ語の小書き片仮名）",
        "ヘブライ文字（ベブル文字、ヒブル文字）",
        "マニプール文字拡張（メイテイ文字拡張）",
        "リス文字（老リス文字、フレイザー文字）",
        "ルーン文字（フサルク、各種ルーン統合）",
        "数字に準じるもの（分数、ローマ数字等）",
        "グジャラート文字（グジャラーティー文字）",
        "ダイアクリティカルマーク拡張（合成可能）",
        "ダイアクリティカルマーク補助（合成可能）",
        "ラテン文字拡張追加（クオック・グーほか）",
        "半角・全角形（英数字・カナ・ハングル等）",
        "カンナダ文字（カナラ文字、カナリース文字）",
        "コプト文字（ボハイラ方言、古ヌビア文字等）",
        "注音字母拡張（閩南語、客家語等の注音字母）",
        "記号用ダイアクリティカルマーク（合成可能）",
        "カヤー文字（カヤー・リー文字、カレンニー文字）",
        "点字図形（ブライユ点字（六点点字）として使用可）",
        "ティフナグ文字（ティフナーグ文字、ティフィナグ文字）",
        "ハングル互換字母（ハングルの基本字母（古ハングル含む））",
        "デーヴァナーガリー文字拡張（サーマ・ヴェーダ用合成記号等）",
        "オル・チキ文字（オル・チェメテ文字、オル文字、サンタル文字）",
        "アルファベット表示形（ラテン文字・アルメニア文字の合字、合成済みヘブライ文字等）"
    ];

    const categoryList = document.getElementById('category-list');
    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        li.addEventListener('click', () => {
            displayCategoryDetails(category);
        });
        categoryList.appendChild(li);
    });

    function displayCategoryDetails(category) {
        const details = document.getElementById('details');
        details.innerHTML = ''; // 既存の内容をクリア

        // CSVファイルを読み込む
        fetch('./csv/' + category + '.csv')
            .then(response => {
                if (!response.ok) {
                    throw new Error('CSVファイルが見つかりません: ' + category);
                }
                return response.text();
            })
            .then(data => {
                let outerArr = [];
                let innerArr = [];

                const rowsArr = data.split('\n');
                for (let row of rowsArr) {
                    let eachRow = row.split(',');
                    for (let ro of eachRow) {
                        innerArr.push(ro);
                    }
                    outerArr.push(innerArr);
                    innerArr = [];
                }

                // ここでouterArrを使って詳細を表示する処理を追加
                const container = document.createElement('div');
                container.className = 'card-container';

                outerArr.forEach((row, index) => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    row.forEach(cell => {
                        const cellDiv = document.createElement('div');
                        cellDiv.className = 'card-cell';
                        cellDiv.textContent = cell;
                        card.appendChild(cellDiv);
                    });
                    card.addEventListener('click', () => {
                        registerCard(row);
                    });
                    container.appendChild(card);
                });

                details.appendChild(container);
            })
            .catch(error => console.error('Error loading CSV:', error));
        
    }

    function registerCard(row) {
        const registeredList = document.getElementById('registered-list');
        const li = document.createElement('li');

        // 削除ボタンを作成
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation(); // 削除ボタンのクリックイベントがリストアイテムのクリックイベントに伝播しないようにする
            removeCard(li, row);
        });

        li.appendChild(deleteButton);
        li.appendChild(document.createTextNode(row.join(', ')));

        // リストの先頭に追加
        registeredList.insertBefore(li, registeredList.firstChild);

        // localStorageに保存
        saveToLocalStorage(row);

        // リストアイテムにクリックイベントリスナーを追加
        li.addEventListener('click', () => {
            copyToClipboard(row[0]);
        });
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyNotification('コピーしました: ' + text);
        }).catch(err => {
            console.error('コピーに失敗しました: ', err);
        });
    }

    function showCopyNotification(message) {
        const notification = document.getElementById('copy-notification');
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000); // 2秒後に非表示にする
    }


    function saveToLocalStorage(row) {
        let registeredItems = JSON.parse(localStorage.getItem('registeredItems')) || [];
        registeredItems.unshift(row);
        localStorage.setItem('registeredItems', JSON.stringify(registeredItems));
    }

    function loadFromLocalStorage() {
        const registeredList = document.getElementById('registered-list');
        let registeredItems = JSON.parse(localStorage.getItem('registeredItems')) || [];
        registeredItems.forEach(row => {
            const li = document.createElement('li');

            // 削除ボタンを作成
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '削';
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation(); // 削除ボタンのクリックイベントがリストアイテムのクリックイベントに伝播しないようにする
                removeCard(li, row);
            });

            // コピーの処理を追加
            li.addEventListener('click', () => {
                copyToClipboard(row[0]);
            });

            li.appendChild(deleteButton);
            li.appendChild(document.createTextNode(row.join(', ')));

            registeredList.appendChild(li);
        });
    }

    function removeCard(li, row) {
        const registeredList = document.getElementById('registered-list');
        registeredList.removeChild(li);

        // localStorageから削除
        let registeredItems = JSON.parse(localStorage.getItem('registeredItems')) || [];
        registeredItems = registeredItems.filter(item => JSON.stringify(item) !== JSON.stringify(row));
        localStorage.setItem('registeredItems', JSON.stringify(registeredItems));
    }

    function parseCSV(data) {
        const rows = data.split('\n');
        const headers = rows[0].split(',');
        return rows.slice(1).map(row => {
            const values = row.split(',');
            let obj = {};
            headers.forEach((header, index) => {
                obj[header.trim()] = values[index].trim();
            });
            return obj;
        });
    }

    // ページロード時にlocalStorageからデータを読み込む
    loadFromLocalStorage();
});

document.getElementById('left-hamburger-menu').addEventListener('click', function() {
    const leftColumn = document.getElementById('left-column');
    leftColumn.classList.toggle('open');
});

document.getElementById('right-hamburger-menu').addEventListener('click', function() {
    const rightColumn = document.getElementById('right-column');
    rightColumn.classList.toggle('open');
});

document.getElementById('under-hamburger-menu').addEventListener('click', function() {
    const underContainer = document.getElementById('under-container');
    underContainer.classList.toggle('open');
});

// メニュー外をクリックしたときにメニューを閉じる
document.addEventListener('click', function(event) {
    const leftColumn = document.getElementById('left-column');
    const rightColumn = document.getElementById('right-column');
    const underContainer = document.getElementById('under-container');
    const leftHamburgerMenu = document.getElementById('left-hamburger-menu');
    const rightHamburgerMenu = document.getElementById('right-hamburger-menu');
    const underHamburgerMenu = document.getElementById('under-hamburger-menu');

    if (!leftColumn.contains(event.target) && !leftHamburgerMenu.contains(event.target)) {
        leftColumn.classList.remove('open');
    }

    if (!rightColumn.contains(event.target) && !rightHamburgerMenu.contains(event.target)) {
        rightColumn.classList.remove('open');
    }

    if (!underContainer.contains(event.target) && !underHamburgerMenu.contains(event.target)) {
        underContainer.classList.remove('open');
    }
});

// メニュー内のリンクをクリックしたときにメニューを閉じる
document.querySelectorAll('.left-column a, .right-column a').forEach(function(link) {
    link.addEventListener('click', function() {
        var leftColumn = document.getElementById('left-column');
        var rightColumn = document.getElementById('right-column');
        leftColumn.classList.remove('open');
        rightColumn.classList.remove('open');
    });
});

function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // モバイル対応

    // navigator.clipboardを使用してコピー
    navigator.clipboard.writeText(copyText.value).then(() => {
        showCopyNotification('コピーしました: ' + copyText.value);
    }).catch(err => {
        console.error('コピーに失敗しました: ', err);
    });
}

function showCopyNotification(message) {
    const notification = document.getElementById('copy-notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000); // 2秒後に非表示にする
}