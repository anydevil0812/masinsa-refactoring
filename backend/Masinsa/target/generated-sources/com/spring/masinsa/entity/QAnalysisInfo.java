package com.spring.masinsa.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAnalysisInfo is a Querydsl query type for AnalysisInfo
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAnalysisInfo extends EntityPathBase<AnalysisInfo> {

    private static final long serialVersionUID = 1053374789L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAnalysisInfo analysisInfo = new QAnalysisInfo("analysisInfo");

    public final StringPath breathAbility = createString("breathAbility");

    public final StringPath delivery = createString("delivery");

    public final StringPath fit = createString("fit");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QMask mask;

    public final StringPath relativeSize = createString("relativeSize");

    public final NumberPath<Integer> score = createNumber("score", Integer.class);

    public QAnalysisInfo(String variable) {
        this(AnalysisInfo.class, forVariable(variable), INITS);
    }

    public QAnalysisInfo(Path<? extends AnalysisInfo> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAnalysisInfo(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAnalysisInfo(PathMetadata metadata, PathInits inits) {
        this(AnalysisInfo.class, metadata, inits);
    }

    public QAnalysisInfo(Class<? extends AnalysisInfo> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mask = inits.isInitialized("mask") ? new QMask(forProperty("mask")) : null;
    }

}

