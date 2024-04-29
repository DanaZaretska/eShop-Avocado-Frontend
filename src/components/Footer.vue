<script setup>
</script>

<template>
  <div class="clr"></div>
  <footer>
    <div class="footer-section">
      <div class="clr"></div>
      <div id="footer_text">Follow us on:</div>
      <div>
        <ul>
          <li><a class="follow_buttons"><i class="fab fa-pinterest"></i></a></li>
          <li><a class="follow_buttons"><i class="fab fa-telegram-plane"></i></a></li>
          <li><a class="follow_buttons"><i class="fab fa-instagram"></i></a></li>
          <li><a class="follow_buttons"><i class="fab fa-facebook-square"></i></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-section {
    width: 70%;
    /*background-color: #5a6268;*/
    border: 2px solid #1b1e21;
}

.footer-section ul{
    text-align: center;
}

.footer-section ul li{
    display: inline-block;
    margin: 20px;
    /*margin-top: 0;*/
}

.follow_buttons {
    color: #1b1e21;
    height: 70px;
    width: 70px;
    font-size: 46px;
    padding: 20px;
}

.follow_buttons:hover {
    font-size: 42px;
    transition: all 0.4s ease;
    color: #2b9464;
}

#footer_text{
    font-size: 24px;
}
</style>
