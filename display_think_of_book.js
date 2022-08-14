let think = convertPageToThink(getPageOfBook());
attachView(createView(think));

function attachView(view){
    const image_block = document.getElementById("imageBlockNew_feature_div");
    image_block.append(view);
}

function createView(think){
    const view_book_think = document.createElement("div");
    view_book_think.className = "book_think";

    const view_child_left = document.createElement("div");
    view_child_left.className = "book_think_left";
    view_child_left.style.paddingTop = think/2 + "mm"
    view_child_left.style.paddingBottom = think/2 + "mm"
    view_book_think.appendChild(view_child_left);

    const view_child_right = document.createElement("div");
    view_child_right.className = "book_think_right";
    view_child_right.style.paddingTop = think/2 + "mm"
    view_child_right.style.paddingBottom = think/2 + "mm"
    view_child_right.style.paddingLeft= think/4 + "mm"
    view_child_right.style.marginLeft = "-" + think/2 + "px"
    view_book_think.appendChild(view_child_right);

    return view_book_think;
}

/**
 * ページ数を取得する
 * @returns {number|null} ページ情報が取得できた場合ページ数を、ない場合はnullを返す
 */
function getPageOfBook() {
    const THINK_INFO_POSITION_IN_BOOK_INFO = 0;
    let book_info = document.getElementById("rich_product_information");
    if(book_info === null) {
        return null;
    }

    let book_size = book_info.getElementsByClassName("a-declarative");
    let book_page_element = book_size[THINK_INFO_POSITION_IN_BOOK_INFO].getElementsByTagName("span")[0];
    let book_page_string = book_page_element.innerText;

    return parseInt(removeStringInBookThinkInfo(book_page_string));
}

/**
 * 「XXXページ」というように取得されるため、ページという文字列を削除する
 * @param book_page_string spanタグから取得した文字列
 * @returns string
 */
function removeStringInBookThinkInfo(book_page_string){
    return book_page_string.slice(0, -3);
}

/**
 * 使う紙によってかなり厚みが異なるが、今のAmazonの仕様的に使用される紙まで特定するのは不可能
 * そのため仮置きで0.8mmとして扱う
 * @param page ページ数
 * @returns int think 単位はmm
 */
function convertPageToThink(page){
    // const JYOUSHITSU_70K = 0.1;
    const ROUGHLY_THINK_PER_A_PAGE = 0.08;
    return ROUGHLY_THINK_PER_A_PAGE * page;
}