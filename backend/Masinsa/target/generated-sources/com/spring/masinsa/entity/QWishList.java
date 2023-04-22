package com.spring.masinsa.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QWishList is a Querydsl query type for WishList
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QWishList extends EntityPathBase<WishList> {

    private static final long serialVersionUID = 1831086848L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QWishList wishList = new QWishList("wishList");

    public final EnumPath<Deletion> deletion = createEnum("deletion", Deletion.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QMask mask;

    public final QMember member;

    public QWishList(String variable) {
        this(WishList.class, forVariable(variable), INITS);
    }

    public QWishList(Path<? extends WishList> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QWishList(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QWishList(PathMetadata metadata, PathInits inits) {
        this(WishList.class, metadata, inits);
    }

    public QWishList(Class<? extends WishList> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mask = inits.isInitialized("mask") ? new QMask(forProperty("mask")) : null;
        this.member = inits.isInitialized("member") ? new QMember(forProperty("member")) : null;
    }

}

