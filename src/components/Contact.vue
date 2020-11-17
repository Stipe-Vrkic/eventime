<template>
  <form name="simple-form" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name"/></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email"/></label>
  </p>
  <p>
    <label>Message: <input type="textarea" name="message"/></label>
  </p>
  
  <p><button type="submit">Send</button></p>
   <input type="hidden"  name="form-name" value="simple-form" /><input>
</form>
</template>
<script>

</script>