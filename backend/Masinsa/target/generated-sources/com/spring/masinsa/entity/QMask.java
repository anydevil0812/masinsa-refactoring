package com.spring.masinsa.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMask is a Querydsl query type for Mask
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMask extends EntityPathBase<Mask> {

    private static final long serialVersionUID = -1125331577L;

    public static final QMask mask = new QMask("mask");

    public final NumberPath<Float> avgScore = createNumber("avgScore", Float.class);

    public final StringPath blockingIndex = createString("blockingIndex");

    public final NumberPath<Long> click = createNumber("click", Long.class);

    public final EnumPath<Deletion> deletion = createEnum("deletion", Deletion.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final ListPath<Image, QImage> images = this.<Image, QImage>createList("images", Image.class, QImage.class, PathInits.DIRECT2);

    public final StringPath name = createString("name");

    public final StringPath option = createString("option");

    public final NumberPath<Long> price = createNumber("price", Long.class);

    public final StringPath purchaseUrl = createString("purchaseUrl");

    public final ListPath<Review, QReview> reviews = this.<Review, QReview>createList("reviews", Review.class, QReview.class, PathInits.DIRECT2);

    public final StringPath shape = createString("shape");

    public final StringPath size = createString("size");

    public final EnumPath<SoldoutStatus> soldout = createEnum("soldout", SoldoutStatus.class);

    public final StringPath thumbnail = createString("thumbnail");

    public final ListPath<WishList, QWishList> wishlist = this.<WishList, QWishList>createList("wishlist", WishList.class, QWishList.class, PathInits.DIRECT2);

    public QMask(String variable) {
        super(Mask.class, forVariable(variable));
    }

    public QMask(Path<? extends Mask> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMask(PathMetadata metadata) {
        super(Mask.class, metadata);
    }

}

