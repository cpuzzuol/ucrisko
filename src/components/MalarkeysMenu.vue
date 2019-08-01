<template>
  <div>
    <h1>Malarkey's Irish Pub Menu</h1>
    <h2>Appetizers</h2>
    <ul>
      <li>Chicken Noodle Soup &mdash; $2.99</li>
      <li>Fried Pickles &mdash; $5.99</li>
      <li>Breadsticks &mdash; $4.99</li>
    </ul>
    <h2>Entrees</h2>
    <ul>
      <li>Fried Chicken &mdash; $9.99</li>
      <li>Ribs &mdash; $9.99</li>
      <li>Burger and Fries &mdash; $9.99 (cheese add $1.00)</li>
    </ul>
    <h2>Sides</h2>
    <ul>
      <li>French Fries &mdash; $2.99</li>
      <li>Onion Rings &mdash; $3.99</li>
      <li>Cole Slaw &mdash; $1.99</li>
    </ul>
    <h2>Desserts</h2>
    <ul>
      <li>Ice cream (chocolate, vanilla, strawberry) &mdash; $2.99</li>
      <li>Chocolate Cake &mdash; $3.99</li>
      <li>Cheesecake &mdash; $4.99</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "SportsAPI",
    data() {
      return {
        standings: [],
      }
    },
    methods: {

    }
  }
</script>


