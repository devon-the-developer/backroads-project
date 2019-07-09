import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'
const About = () => {
    return (
        <div>
            <section className={styles.about}>
                <Title title='about' subtitle='us' />
                <div className={styles.aboutCenter}>
                    <article className={styles.aboutImg}>
                        <div className={styles.imgContainer}>
                            <img src={img} alt="about company" />
                        </div>
                    </article>
                    <article className={styles.aboutInfo}>
                        <h4>explore the difference</h4>
                        <p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum sunt eveniet. Error amet id dolores dignissimos laborum ipsa! Consequuntur in voluptas debitis dolores officiis eius dolore illo sed tempore.</p>
                            <p>Deleniti facilis quae earum perspiciatis ad necessitatibus minus porro voluptatibus reiciendis eius, vitae, delectus obcaecati quo laborum consequatur voluptates consectetur quod natus nihil vel distinctio aut! Maiores nulla tenetur dolore!</p>
                        </p>
                        <button type="button" className="btn-primary">read more</button>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default About
