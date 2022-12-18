const baseUrl = 'http://localhost:8082/api';
const companyUrl = `${baseUrl}/lmiainfo/UpdateLink`;

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
};

window.onload = () => {
  $(document).ready(async function () {
    let companySearchResult = $('[data-header-feature]>div');

    companySearchResult.append(
      "<div></div><a class='lmiaUpdater' href=''>Update<a/>"
    );

    $('.lmiaUpdater').click(async function (e) {
      e.preventDefault();
      let link = $(this).siblings('a').attr('href');

      let options = {
        method: 'PUT',
        headers,
        body: JSON.stringify(link),
      };

      var urlParams = new URLSearchParams(window.location.search);
      await fetch(
        companyUrl + '?id=' + urlParams.get('lmiaEmployerId'),
        options
      );
    });
  });
};
