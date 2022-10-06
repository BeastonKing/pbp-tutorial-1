$(document).ready(function () {
    $('form').submit(function (event) {
      const formData = {
        csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val(),
        nama_barang: $('#nama_barang').val(),
        harga_barang: parseInt($('#harga_barang').val()),
        deskripsi: $('#deskripsi').val(),
      };

      $.ajax({
        type: 'POST',
        url: '/wishlist/ajax/post',
        data: formData,
        dataType: 'json',
        encode: true,
      }).done(function (data) {
        $('#message').text(data.message);
      });

      event.preventDefault();
    });
});