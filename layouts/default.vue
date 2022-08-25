<template>
  <div class="flex flex-col h-screen justify-between">
    <div><Header /></div>
    <div class="mb-auto">
      <Html lang="tr" />
      <Title>Erbay Lastik</Title>
      <Meta name="description" content="Erbay Lastik" />
      <slot />
    </div>
    <div><Footer /></div>
  </div>
</template>
