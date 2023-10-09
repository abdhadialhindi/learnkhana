<template>
    <section class="margin">
        <div class="back d-flex justify-center align-center">
            <div class="text-center content">
                <h1 class="titel-1">{{ $t("LET'S MAKE SOMETHING AWESOME TOGETHER") }}</h1>
            </div>
        </div>
    </section>
</template>
<style scoped>
.back {
    height: 650px;
    background: url("@/assets/images/contactus/header.png") no-repeat;
    background-size: contain;
}
.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-50)/var(--unnamed-line-spacing-76) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal bold 50px/76px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
text-shadow: 0px 3px 6px #00000066;
text-transform: uppercase;
}
.content {
    width: 50%;
}
@media (max-width:900px) {
    .back {
        height: 193px;
        background: url("@/assets/images/contactus/headerxs.png") no-repeat;
        background-size: cover;
    }
    .titel-1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal bold 16px/25px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
text-shadow: 0px 3px 6px #00000030;
text-transform: uppercase;
    }
    .margin {
        margin-top: 55px;
    }
}
</style>