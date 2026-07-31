<template>
    <div class="hero-txt flex-col">
        <p class="">
            Building a healthier community takes more than one hand &hyphen; It takes a shared vision, trusted partnership, and a commitment to transforming lives. <br>
            At Alandore Health, we believe that good health is the foundation of thriving families, productive workplaces, and prosperous communities.
            <br>
            <button><RouterLink to="/about">Read About Us</RouterLink></button>
        </p>
        

        <div class="dep-btns flex">
            <button>pharmacy</button>
            <button>diagnostics</button>
            <button>Nutrition & Wellness</button>
        </div>
    </div>


    <div class="cards flex">
        <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio nihil adipisci molestiae soluta enim vel!</p>
            <p>the author name</p>
            <div class="tags">
                <p>tag 1</p>
                <p>gag 2</p>
                <p>tag 3</p>
            </div>
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

    .dep-btns button{
        color: var(--accent-color);
        border-radius: .4rem;
        border-right: 2px solid;
    }
</style>

<script setup>
    import { RouterLink } from 'vue-router';

</script>