<template>
    <div class="hero-txt flex-col">
        <p class="flex-col">
            Alandore Health Uganda is the healthcare arm of Alandore Group Ltd, dedicated to building a healthy, thriving community in Northern Uganda. We bring together three specialised divisions — nutrition and wellness, pharmacy, and diagnostics — under one trusted brand, all headquartered in Laroo-Pece, Gulu City

            <div class="span">
                <button>Read About Us</button>
            </div>
        </p>
        

        <div class="dep-btns flex">
            <button>pharmacy</button>
            <button>diagnostics</button>
            <button>Nutrition & Wellness</button>
        </div>
    </div>

    <div class="cards flex">
        <div class="card">
            <h1>cards 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
        </div>
        <div class="card">
            <h1>cards 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
        </div>
        <div class="card">
            <h1>cards 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
        </div>
        <div class="card">
            <h1>cards 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
        </div>
        <div class="card">
            <h1>cards 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
        </div>
        <div class="card">
            <h1>cards 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
        </div>
        <div class="card">
            <h1>cards 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
        </div>
        <div class="card">
            <h1>cards 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
        </div>
        <div class="card">
            <h1>cards 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
        </div>
    </div>

</template>

<style scoped>
    button{
        border-radius: 40px;
    }

    .cards{
        flex-wrap: wrap; gap: 4rem 2rem;
        align-items: center;
        width: 92%; margin: 1rem auto;
    }

    .hero-txt p{
        margin-top: 4rem;
        font-weight: 500;
        letter-spacing: .8px;
        color: var(--darker-pri-color);   
        font-family: 'Accent Font', sans-serif;
        font-size: var(--bg-fsize2);
        padding: 3rem 8rem 1rem;
    }
    .hero-txt .span button{
        background-color: var(--accent-color);
        font-size: var(--bg-fsize2);
        border-radius: .4rem;
        border: none;
        padding: .4rem 2rem;
        box-shadow: 0 4px 4px -4px var(--pri-color);
    }
    .hero-txt{
    position: relative;
        height: 80vh;
        padding: 4rem;
        text-align: center;
        background-color: var(--light-accent-color);
    }

    .dep-btns{
        position: absolute;
        padding: 0 auto;
        bottom: 2rem;
        left: 50%; transform: translateX(-50%);

        justify-self: flex-end;
        justify-content: center;
    }
</style>

<script setup>

</script>