import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import User from './User'

@Entity('recipes')
class Recipe {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    provider: User;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    ingredients: string;

    @Column()
    mode_prepare: string;

    @Column()
    time: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Recipe
