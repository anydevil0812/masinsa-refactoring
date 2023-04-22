package com.spring.masinsa.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMember is a Querydsl query type for Member
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMember extends EntityPathBase<Member> {

    private static final long serialVersionUID = 891623029L;

    public static final QMember member = new QMember("member1");

    public final StringPath age_group = createString("age_group");

    public final StringPath birth = createString("birth");

    public final EnumPath<Deletion> deletion = createEnum("deletion", Deletion.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath nickname = createString("nickname");

    public final StringPath sex = createString("sex");

    public final StringPath token = createString("token");

    public final ListPath<WishList, QWishList> wishlist = this.<WishList, QWishList>createList("wishlist", WishList.class, QWishList.class, PathInits.DIRECT2);

    public QMember(String variable) {
        super(Member.class, forVariable(variable));
    }

    public QMember(Path<? extends Member> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMember(PathMetadata metadata) {
        super(Member.class, metadata);
    }

}

