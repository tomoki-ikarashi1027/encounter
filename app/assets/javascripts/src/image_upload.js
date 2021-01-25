$(document).on("change", "#image_upload", function (e) {
  if (e.target.files.length) {
    let reader = new FileReader(); //FileReader->ユーザーのコンピュータに保存されているファイルの内容を非同期に読み取り。
    reader.onload = function (e) {
      $(".hidden").removeClass();
      $(".profile-default-img").removeClass();
      $("#profile-img").remove();
      $("#profile-img-prev").attr("src", e.target.result); //<img>タグのsrc属性にアップロードしたファイルを設定
    };
    return reader.readAsDataURL(e.target.files[0]); //readAsDataURLメソッドは、指定されたファイルの読み込みを実行。
  }
});
