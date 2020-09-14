import React, { useEffect } from 'react';
import './Article-body.css';

const articlesContent = [
    {articleId: "generaciones-de-pokemon",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    <img src="https://i11a.3djuegos.com/juegos/3405/_articulos_/fotos/articulos/_articulos_-5216104.jpg" alt="Imagen" 
    style="width: 60%; float: left; margin: 10px 10px 10px 0; "/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "initiative-xbox-series-x",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "profesiones-de-videojuegos-game-designer",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    <img src="https://www.pulsecollege.com/wp-content/uploads/game-designer-versus-game-developer-pulse-college-dublin-1024x536.png" alt="Imagen" style="width: 100%; "/>
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "call-of-duty-2020-anuncio",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    <img src="https://cultura-gamer.com/wp-content/uploads/2020/06/call-of-duty-bans.jpg" alt="Imagen" style="width: 100%; "/>
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "doom-eternal-the-ancient-gods-adelanto",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    <img src="https://www.gameinformer.com/s3/files/styles/body_default/s3/2020/08/07/46211d07/ancient_gods.jpg" alt="Imagen" style="width: 100%; "/>
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "videojuegos-gratis-borderlands-3-gears-5",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "final-fantasy-vii-remake-ventas",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    <img src="https://cnet3.cbsistatic.com/img/26BRaFK8gCfnL1AmzfLl7BOB7e0=/940x0/2020/04/16/7b62ef25-afef-4201-ba1a-9717df9c4efe/c9d04f8d-e243-499e-93f2-aa3a391cc2d4.jpg" alt="Imagen" style="width: 100%; "/>
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "fornite-retirado-de-google-play",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    <img src="https://s.libertaddigital.com/2019/01/03/fornite.jpg" alt="Imagen" style="width: 100%; "/>
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "fall-guys-recompensas-gratis-problemas-con-los-servidores",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "spider-man-miles-morales-ray-tracing",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FFKHFE2MZFHLLJTYF2RF7XGAMY.jpg" alt="Imagen" 
    style="width: 55%; float: left; margin: 10px 10px 10px 0; "/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "call-of-duty-2020-pagina-web-secreta-guerra-fria",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <img src="https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2020/08/Call-of-Duty-2020-Teaser-Call-of-Duty-Black-Ops-Cold-War.jpg?fit=1200%2C800&quality=80&ssl=1" alt="Imagen" 
    style="width: 70%; float: left; margin: 10px 10px 10px 0; "/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "fall-guys-juego-mas-descargado-de-la-historia-PS-plus",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://i11d.3djuegos.com/juegos/16724/fall_guys_ultimate_knockout/fotos/analisis/fall_guys_ultimate_knockout-5225203.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "assassins-creed-valhalla-trailer-BSO",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://generacionxbox.com/wp-content/uploads/2020/04/assassins-creed-valhalla-generacionxbox-1.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "doom-eternal-y-teso-en-nueva-generacion",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://as.com/meristation/imagenes/2019/01/19/noticias/1547893814_905164_1547894163_noticia_normal.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "PS-plus-10-aniversario",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "dead-cells-para-android",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://image.winudf.com/v2/image1/Y29tLnBsYXlkaWdpb3VzLmRlYWRjZWxscy5tb2JpbGVfc2NyZWVuXzFfMTU4NjI1MjM0N18wMjQ/screen-2.jpg?fakeurl=1&type=.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "ps5-malas-noticias-sobre-el-precio",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "spelunky-2-nuevo-video-gameplay-fecha-de-lanzamiento",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://media.vandal.net/i/1200x630/64896/spelunky-2-2018829203944_1.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "anunciado-hood-outlaws-and-legends-ps5",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://i.ytimg.com/vi/T1jD19p-gHw/maxresdefault.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "hitman-3-experiencia-VR-playstation",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://as01.epimg.net/meristation/imagenes/2020/07/02/noticias/1593663171_687423_1593663205_portada_normal.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "director-de-god-of-war-ps5",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minima deleniti hic laudantium!
    <br/><br/>
    Veritatis neque velit distinctio asperiores minus esse aliquam eligendi iste delectus error, laudantium accusamus adipisci 
    magnam deleniti cumque accusantium, sunt recusandae non quisquam rerum! Accusamus, explicabo minus!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "apex-temporada-6",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://ministeriodelgamer.com/wp-content/uploads/2020/07/01-6.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    },
    {articleId: "pack-arkane-20-años",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://i11d.3djuegos.com/juegos/11182/dishonored_2/fotos/maestras/dishonored_2-3522906.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?
    <br/><br/>
    <img src="https://www.muycomputer.com/wp-content/uploads/2017/05/Prey_2.png" alt="Imagen" style={ width= 100% }/>
    <br/><br/>`
    },
    {articleId: "fornite-nuevas-skins-DC-comics",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem necessitatibus repudiandae vitae voluptates totam quod repellendus est cupiditate!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum distinctio reiciendis dicta inventore, qui
    et ut officia quisquam incidunt tempora cumque sint necessitatibus iusto deserunt facilis aut, cupiditate quos 
    vel. Quia omnis, autem totam culpa corporis. Cupiditate iusto eius fuga natus, veniam similique maiores necessi
    tatibus molestiae alias inventore.<br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem architecto iusto, adipisci repellendus delectus
    repellat maiores tempore perferendis. Aliquam excepturi distinctio nihil blanditiis accusamus, vel accusantium 
    molestiae architecto odio!
    <br/><br/>
    <img src="https://powergamingnetwork.com/wp-content/uploads/2020/07/fortnite-94.jpg" alt="Imagen" style={ width= 100% }/>
    <br/><br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde voluptatem, molestiae recusandae non cum
    itaque quis nemo. Qui tenetur commodi libero temporibus sint itaque veniam cum dolores consequuntur quae,
    exercitationem nemo officia blanditiis ut laborum id accusantium totam! Eius beatae molestias, quibusdam ad
    possimus, maxime repellendus distinctio soluta reiciendis in similique. Quos doloribus, mollitia nulla debitis
    eos necessitatibus quisquam odit fugiat laboriosam voluptas quam delectus voluptate doloremque officia itaque,
    vitae veritatis minus in accusamus. Nostrum culpa obcaecati aspernatur tempora. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Quae, enim. Quam aliquid placeat tenetur aspernatur beatae hic velit fugit. 
    Accusantium, voluptatem id vitae corporis voluptatibus exercitationem laudantium quod perferendis consequuntur.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, praesentium voluptatum consectetur modi earum 
    corporis eligendi iste et, illum debitis reprehenderit? Quos repudiandae odio aliquam laboriosam, cum in libero
    unde fuga quisquam illum ipsam mollitia perferendis iste molestiae aperiam pariatur?`
    }
]
 
const ArticleBody = ({content}) =>{
    
    /* Filtrando mediante la propiedad content */
    const actualContent = articlesContent.filter( c => c.articleId == content )[0];

    useEffect(() => {
        /* Imprimiendo el subtitulo y el contenido */
        document.getElementById("content").innerHTML = actualContent.content;
        document.getElementById("sub-title").innerHTML = actualContent.subTitle;
    });
    
    return(
    <div className="article-body" id="nav-pos">

        <span className="sub-title">
            <h3 id="sub-title"></h3>
        </span>

        <p className="atc-content" id="content">
        </p>
    </div>
)
}

export default ArticleBody;