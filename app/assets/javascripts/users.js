// <script type="text/javascript">
function updateInput() {
	var elem = document.getElementById("new_user");
	elem.value = "My default value";
}
// </script>
function submitAttendance() {
  var frm = document.getElementById('post_form');
  if (frm) {
    frm.submit();
  }
}