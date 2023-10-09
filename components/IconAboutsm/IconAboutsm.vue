<template>
  <section>
    <v-container class="px-9">
      <v-row justify="center"> <img src="@/assets/images/about/1.png" alt="" class="img"/> </v-row>
      <v-row>
        <h2 class="titel-1">{{ $t("Result-Oriented:") }}</h2>
        <p class="desc">{{ $t("We identify and act to realize our desired outcomes in a timely, efficient, and cost-effective manner.") }}</p>
      </v-row>
      <v-row justify="center"> <img src="@/assets/images/about/2.png" alt="" class="img"/></v-row>
      <v-row>
        <h2 class="titel-1">{{ $t("Productive Relationships:") }}</h2>
        <p class="desc">{{ $t("We believe that building and sustaining positive relationships with clients, partners and colleagues is foundational to our success.") }}</p>
      </v-row>
      <v-row justify="center"> <img src="@/assets/images/about/3.png" alt="" class="img"/></v-row>
      <v-row>
        <h2 class="titel-1">{{ $t("Change Agility:") }}</h2>
        <p class="desc">{{ $t("We aknowledge that change can create opportunities, and we embrace and adapt to the evolving landscape of our industry.") }}</p>
      </v-row>
      <v-row justify="center"><img src="@/assets/images/about/4.png" alt="" class="img"/> </v-row>
      <v-row>
        <h2 class="titel-1">{{ $t("Seizing Accountability:") }}</h2>
        <p class="desc">{{ $t("We recognize the importance of taking responsibility for our actions and strive to improve through proactive solutions and preventive measures.") }}</p>
      </v-row>
      <v-row justify="center"><img src="@/assets/images/about/5.png" alt="" class="img"/> </v-row>
      <v-row>
        <h2 class="titel-1">{{ $t("Self-Growth:") }}</h2>
        <p class="desc">{{ $t("We are passionate to continuously develop and nurture our employees’ professional and personal growth.") }}</p>
      </v-row>
      <v-row justify="center"><img src="@/assets/images/about/6.png" alt="" class="img"/> </v-row>
      <v-row>
        <h2 class="titel-1">{{ $t("Technical Excellence:") }}</h2>
        <p class="desc">{{ $t("We are committed to providing the highest standard of technical knowledge, skills, and expertise to the success of our business.") }}</p>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 16px/25px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 0.99;
margin-bottom: 14px;
}
.desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-413f3f);

font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #413F3F;
opacity: 0.99;
}
.img {
  width: 45%;
}

</style>