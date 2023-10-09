<template>
    <div>
      <div class="background-ld d-flex justify-center">
        <div class="d-flex justify-center align-center img-icon">
          
        </div>
      </div>
    </div>
  </template>
  <style scoped lang="scss">
  .background-ld {
    position: relative;
    height: 820px;
    background-image: url("@/assets/images/consulatyld/portofoliold1.png");
  }
  .background-ld::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url("@/assets/images/consulatyld/portofoliold2.png");
  }
  .img-icon {
    top: 20%;
    width: 80%;
    height: 804px;
    position: relative;
    z-index: 1;
    background-image: url("@/assets/images/consulatyld/portofoliold1.png");
    border-radius: 15px;
    background-size: 100% 100%;
  }
  .img-icon::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url("@/assets/images/consulatyld/overlayportfolio.png");
    border-radius: 15px;
    background-size: 100% 100%;
  }
  .button-1 {
    position: relative;
    z-index: 2;
    width: 113px;
    height: 113px;
    background-color: transparent !important;
    border: 1px solid var(--unnamed-color-ffffff);
  }
  .icon {
    background-color: #fff;
  }
  .icon:hover {
    background-color: var(--unnamed-color-2852a0);
  }
  @media (max-width: 786px) {
    .background-ld {
      height: 224px;
      top: -146px;
    }
    .img-icon {
      height: 259px;
      background-image: url("@/assets/images/consulatyld/portofoliold768.png");
      background-size: 100% 100%;
      
    }
    .button-1 {
      width: 36px;
      height: 36px;
    }
  }
  </style>
  <style >
  .img-icon .v-btn--icon.v-size--default .v-icon {
    position: relative;
    height: 80%;
    font-size: 48px;
    width: 80%;
    z-index: 1;
  }
  .img-icon .v-btn__content {
    height: 100%;
  }
  .img-icon .mdi:before {
    position: relative;
    z-index: 1;
  }
  @media (max-width: 768px) {
    .img-icon .v-btn--icon.v-size--default .v-icon{
      width: 26px;
  height: 26px;
  font-size: 22px;
    }
  }
  </style>