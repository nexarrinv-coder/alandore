<template>
    <div class="hero">
        Prevention is expensive only until you face the Crisis.
        <br>
    </div>
    <h2 class="container">Know more about Alandore Health</h2>

    <article class="mission-vision">
        <div class="mission">
            <h4>Our Mission</h4>
            <p>
                To improve the <span class="il-focus-txt">health and wellbeing of individuals and communities</span> by delivering integrated, high-quality, and accessible healthcare solutions through Nutrition & Wellness, Pharmacy, and Diagnostics.
            </p>
        </div>
    
        <div class="vision">
            <h4>Our Vision</h4>
            <p>
                To be Uganda’s trusted leader in integrated healthcare, empowering healthier lives and building thriving communities through innovation, excellence, and compassionate care.
            </p>
        </div>
    </article>


    <div class="container">
        <p>
            Alandore Health is the healthcare arm of Alandore Group Ltd, committed to improving lives through integrated, accessible, and person-centred healthcare services. We bring together specialized expertise in Nutrition & Wellness, Pharmacy, and Diagnostics to provide comprehensive solutions that promote prevention, early detection, effective treatment support, and lifelong wellbeing.
        </p>
    
        <p>
            We believe that healthier people build stronger families, more productive workplaces, and more resilient communities. Guided by this belief, we work to make quality healthcare more accessible through evidence-based practice, professional excellence, innovation, and compassionate service.
        </p>
    </div>

    <section class="container divisions mt8">
        <h2>Our Divisions</h2>
        <p>
            We provide services under three main departments.
        </p>
        
        <div class="cards flex mt2">
            <div class="card">
                <h4>Nutrition & Wellness</h4>
                <p>
                    Our Nutrition & Wellness Division empowers individuals, families, and organizations to achieve better health through nutrition assessment, personalized nutrition care, wellness programs, lifestyle coaching, preventive health education, corporate wellness solutions, and evidence-based nutrition interventions that support healthy living across every stage of life.
                </p>
                <button><RouterLink to="">More Details</RouterLink></button>
            </div>

            <div class="card">
                <h4>Pharmacy</h4>
                <p>
                    Our Pharmacy Division provides quality-assured medicines, nutritional supplements, medical supplies, and professional pharmaceutical care. We are committed to ensuring safe, reliable, and affordable access to health products while promoting the responsible use of medicines to improve patient outcomes.
                </p>
                <button><RouterLink to="">More Details</RouterLink></button>
            </div>
        
            <div class="card">
                <h4>Diagnostics</h4>
                <p>
                    Our Diagnostics Division delivers accurate, timely, and dependable laboratory and diagnostic services that support informed clinical decision-making, disease prevention, early detection, treatment monitoring, and better health outcomes.
                </p>
                <button><RouterLink to="">More Details</RouterLink></button>
        </div>
    
        </div>
    </section>



    <section class="values container">
        <h4>Our Core Values</h4>
        <p>
            At Alandore Health, we are more than a healthcare provider—we are your trusted partner in prevention, wellness, diagnosis, and healthier living. Together, we are shaping a healthier future for Uganda, one person, one family, and one community at a time.
        </p>

        <ol>
            <li>Integrity – We uphold honesty, ethics, and accountability in everything we do.</li>
            <li>Excellence – We pursue the highest standards of quality and professionalism.</li>
            <li>Compassion – We serve every individual with dignity, empathy, and respect.</li>
            <li>Innovation – We embrace new ideas and evidence-based solutions to improve healthcare.</li>
            <li>Collaboration – We build strong partnerships to achieve better health outcomes.</li>
            <li>Community Impact – We are dedicated to creating healthier, stronger, and more resilient communities.</li>
        </ol>
    </section>

</template>

<style scoped>
    .hero{
        padding: 4rem 2rem;
        text-align: center;
        background-color: var(--darker-pri-color);
        color: var(--white);
        font: var(--bg-fsize2)/1.4 'Accent Font', sans-serif;
    }



    p{
        font-size: var(--bg-fsize1);
        line-height: 1.4;
        margin: 1rem 0;
    }

    .container{
        margin: 2rem 4rem;
    }

    /* mission and vision */
    .mission-vision p{
        color: var(--darker-pri-color);
        font-weight: 560;
        font-family: 'Accent Font', sans-serif;

    }
    .mission-vision{
        margin: 3.2rem 3rem 1rem;
        border-radius: 1rem;
        background: var(--light-accent-color);
        padding: 2rem;
        
        display: flex;
    }
    .mission-vision div{
        padding: 4rem 4rem 1rem;
    }

    /* section.divisions{} */
    section.divisions .cards{
        justify-content: space-between;
        text-align: left;
    }

    .cards .card{
        padding: 3rem;
    }


</style>

<script setup>

</script>