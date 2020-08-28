<template>
  <section class="login__holder">
    <div>
      <div data-cursor-hover class="form__control">
        <input type="text" placeholder="Name">
      </div>
      <div data-cursor-hover class="form__control">
        <input type="email" placeholder="Email">
      </div>
      <div data-cursor-hover class="form__control">
        <button class="sub__button">Strike Gold</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .login__holder {
    min-height: calc(100vh - 130px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .form__control {
      margin: 10px 0;
    }
    input {
      border: none;
      border-radius: 25px;
      height: 30px;
      width: 250px;
      outline: none!important;
      padding: 5px 10px;
    }
    .sub__button {
      border: none;
      border-radius: 25px;
      outline: none!important;
      background: #eeb30b;
      width: 250px;
      padding: 10px 30px;
    }
  }
</style>

<script></script>
