<script setup>
</script>

<template>
  <header>
    <div class="menu-section">
      <a id="logo" href="#">AVOcado</a>

      <nav class="nav-menu">
        <ul class="menu-main">
          <router-link to="/" tag="li">Home</router-link>
          <router-link to="/products" tag="li">Products</router-link>
          <router-link to="/about" tag="li">About</router-link>
          <router-link to="/cart" tag="li">Cart</router-link>
        </ul>
      </nav>

    </div>
  </header>
</template>

<style lang="scss" scoped>
.menu-section {
    width: 70%;
    margin-left: 15%;
}

#logo {
    position: absolute;
    padding-top: 20px;
    font-family: 'Ubuntu Condensed', sans-serif;
    font-size: 28px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #1b1e21;
}

#logo:hover {
    color: #2b9464;
    transition: all 0.3s ease;
}

.menu-main {
    list-style: none;
    margin: 10px 0 10px;
    padding: 25px 0 5px;
    text-align: center;
}
.menu-main li {display: inline-block;}

.menu-main li:after {
    content: "|";
    color: #606060;
    display: inline-block;
    vertical-align:top;
}

.menu-main li:last-child:after {content: none;}

.menu-main a {
    color: #1b1e21;
    text-decoration: none;
    font-family: 'Ubuntu Condensed', sans-serif;
    letter-spacing: 2px;
    position: relative;
    padding-bottom: 20px;
    margin: 0 34px 0 30px;
    font-size: 18px;
    display: inline-block;
    transition: color .2s;
}

.menu-main a.current, .menu-main a:hover{
    color: #2b9464;
    transition: all 0.3s ease;
}
</style>
