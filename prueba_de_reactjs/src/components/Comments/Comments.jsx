import React from 'react';
import './Comments.css';
import CommentUser from './Comment-user';
import LikeDislike from './Like-Dislike/Like-Dislike';

const comments = [
{userId:75,
comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae quaerat magnam nobis cumque sunt corporis deser ducimus quo debitis ea illo repellat nulla aliquid quod aut minus, accusamus ullam!",
date: "6 horas",
likeActive: false,
like: 3,
dislike: 0,
dislikeActive: false,
name:"Alex",
pic: "https://i11a.3djuegos.com/files_comunidad/4184/img/avatars/13434336-1681.jpg",
connect: true
},
{userId:1,
comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero, sunt tempore sint inventore consequuntur eum facere. Tempora molestiae",
date: "8 horas",
likeActive: false,
like: 2,
dislike: 1,
dislikeActive: false,
name:"Zifus",
pic: "https://i11c.3djuegos.com/files_comunidad/4467/img/avatars/13469342-50515.jpg",
connect: false
},
{userId:2,
comment:"odio a exercitationem quibusdam nihil placeat, dolorem sit quo provident voluptatum suscipit repudiandae eveniet ipsum.",
date: "15 horas",
likeActive: false,
like: 1,
dislike: 4,
dislikeActive: false,
name:"Clannw",
pic: "https://i11c.3djuegos.com/files_comunidad/8142/img/avatars/13469550-25728.jpg",
connect: true
},
{userId:3,
comment:"Labore quibusdam porro cumque quisquam eos illo vitae libero reprehenderit repellat temporibus excepturi nesciunt nostrum officiis aperiam esse provident similique, adipisci odio voluptatum tempore magnam amet? Impedit quasi veritatis accusantium iusto molestiae",
date: "1 día",
likeActive: false,
like: 0,
dislike: 1,
dislikeActive: false,
name: "Erik",
pic: "https://i11d.3djuegos.com/files_comunidad/4483/img/avatars/11940075-8419.jpg",
connect: true
},
{userId:4,
comment:"id architecto repudiandae asperiores deserunt possimus! Corporis reiciendis numquam ducimus in tempora, dolorum libero, veritatis ipsam vel error eveniet? Magni nesciunt dicta voluptates eum.",
date: "1 día",
likeActive: false,
like: 0,
dislike: 0,
dislikeActive: false,
name: "Yopss",
pic: "https://www.3djuegos.com/img3/piezas/iconos/avatars/usuario/74.png",
connect: false
}
]

const Comments = () =>
(
    <div className="comments-back">

        <p className="coments-counter"> Comentarios({comments.length}) </p>

        <div className="comments">
            {comments.map(c => {

                return<>
                    <CommentUser actualUserId={c.userId} comments={comments} />

                    <p className="comment-text" >{c.comment}</p>

                    <LikeDislike c={c} comments={comments} />
                </>
            })}
        </div>

    </div>
)

export default Comments;