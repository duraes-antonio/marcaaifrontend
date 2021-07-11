import {later, MockService} from '../base-mock';
import {ProviderService} from '../../../domain/use-cases/provider';
import {Nullable, StringNullable} from '../../../shared/types/general';
import {
    IProvider,
    Provider,
    ProviderInput,
} from '../../../domain/entities/provider';
import {IdType} from '../../../shared/store/types';
import {Location} from '../../../models/location';
import {Workday, WorkdayStatus} from '../../../domain/entities/schedule';

export class ProviderServiceMock
    extends MockService
    implements ProviderService
{
    private readonly basicProvidersMock: {name: string; imageUrl: string}[] = [
        {
            name: 'Lotus Beauty',
            imageUrl:
                'https://d1k8hez1mxkuxw.cloudfront.net/external_data/130670828-s10/166062220.jpeg',
        },
        {
            name: 'Dinastia da Barba Barbearia',
            imageUrl: 'https://i.ibb.co/FYpGTfS/image.png',
        },
        {
            name: 'Salão e Barbearia Impactus',
            imageUrl: 'https://i.ibb.co/Npfy0KH/image.png',
        },
        {
            name: 'Lotus Beauty',
            imageUrl:
                'https://d1k8hez1mxkuxw.cloudfront.net/external_data/130670828-s10/166062220.jpeg',
        },
        {
            name: 'Dinastia da Barba Barbearia',
            imageUrl: 'https://i.ibb.co/FYpGTfS/image.png',
        },
    ];
    private readonly data = new Date(Date.now());
    private readonly providersMock: IProvider[] = this.basicProvidersMock.map(
        p => {
            return new Provider({
                id: this.generateGuid(),
                name: p.name,
                imageUrl: p.imageUrl,
                category: Math.ceil(Math.random() * 5),
                routine: new Workday({
                    id: this.generateGuid(),
                    breaks: [],
                    closed: Math.random() > 55 / 100,
                    officeHour: {
                        start: this.data,
                        end: new Date(this.data.getTime() + 10),
                    },
                }),
                workStatus: WorkdayStatus.UNKNOWN,
                distanceInMeters: Math.random() * 5000,
                coversUrl: [
                    'https://retaildesignblog.net/wp-content/uploads/2012/02/YOUD-beauty-center-All-In-Living-Rotterdam-720x480.jpg',
                    'https://www.katiavelo.com.br/wp-content/uploads/2018/07/1-51.jpg',
                    'https://informa.life/wp-content/uploads/2019/11/Revista-Sul-Life-5-Charllene.jpg',
                ],
                services: [
                    {
                        name: 'Massagem com pedras nórdicas direto da Noruega',
                        id: this.generateGuid(),
                        provider: {name: p.name, id: this.generateGuid()},
                        price: 29.99,
                        rating: 4.5,
                        description:
                            'Aliquam accumsan gravida turpis, sed feugiat ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sollicitudin diam ac tellus varius, ac tincidunt mauris laoreet. Aliquam ipsum enim, finibus eget est eget, tristique tristique urna. Phasellus vulputate venenatis magna, nec eleifend purus faucibus vitae. Curabitur id erat purus. Suspendisse luctus nec ante convallis eleifend. Ut ac nisl congue, tincidunt diam eget, ornare quam.\n\nNunc sollicitudin magna nec ante tempus blandit. Sed sit amet ipsum ut velit pretium maximus. Praesent a tortor faucibus, faucibus nisl in, convallis mi. Proin et tellus consequat, interdum urna a, iaculis est. Donec vulputate mi nulla, sit amet aliquet metus porttitor non. Etiam ipsum nulla, euismod sit amet finibus vitae, hendrerit interdum dolor. Phasellus lacus quam, vestibulum quis lectus pellentesque, feugiat hendrerit odio. Etiam sit amet tincidunt dolor, vel dignissim augue.\n\nAliquam accumsan gravida turpis, sed feugiat ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sollicitudin diam ac tellus varius, ac tincidunt mauris laoreet. Aliquam ipsum enim, finibus eget est eget, tristique tristique urna. Phasellus vulputate venenatis magna, nec eleifend purus faucibus vitae. Curabitur id erat purus. Suspendisse luctus nec ante convallis eleifend. Ut ac nisl congue, tincidunt diam eget, ornare quam.\n\nAliquam accumsan gravida turpis, sed feugiat ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sollicitudin diam ac tellus varius, ac tincidunt mauris laoreet. Aliquam ipsum enim, finibus eget est eget, tristique tristique urna. Phasellus vulputate venenatis magna, nec eleifend purus faucibus vitae. Curabitur id erat purus. Suspendisse luctus nec ante convallis eleifend. Ut ac nisl congue, tincidunt diam eget, ornare quam.',
                        coversUrl: [
                            'https://retaildesignblog.net/wp-content/uploads/2012/02/YOUD-beauty-center-All-In-Living-Rotterdam-720x480.jpg',
                            'https://www.katiavelo.com.br/wp-content/uploads/2018/07/1-51.jpg',
                            'https://informa.life/wp-content/uploads/2019/11/Revista-Sul-Life-5-Charllene.jpg',
                        ],
                        imageUrl:
                            'https://dicasdemassagem.com/wp-content/uploads/beneficios-da-massagem-com-pedras-quentes.jpg',
                    },
                    {
                        name: 'Massagem com pedras nórdicas direto da Noruega',
                        id: this.generateGuid(),
                        provider: {name: p.name, id: this.generateGuid()},
                        price: 49.99,
                        rating: 3.7765,
                        description:
                            'Aliquam accumsan gravida turpis, sed feugiat ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sollicitudin diam ac tellus varius, ac tincidunt mauris laoreet. Aliquam ipsum enim, finibus eget est eget, tristique tristique urna. Phasellus vulputate venenatis magna, nec eleifend purus faucibus vitae. Curabitur id erat purus. Suspendisse luctus nec ante convallis eleifend. Ut ac nisl congue, tincidunt diam eget, ornare quam.\n\nNunc sollicitudin magna nec ante tempus blandit. Sed sit amet ipsum ut velit pretium maximus. Praesent a tortor faucibus, faucibus nisl in, convallis mi. Proin et tellus consequat, interdum urna a, iaculis est. Donec vulputate mi nulla, sit amet aliquet metus porttitor non. Etiam ipsum nulla, euismod sit amet finibus vitae, hendrerit interdum dolor. Phasellus lacus quam, vestibulum quis lectus pellentesque, feugiat hendrerit odio. Etiam sit amet tincidunt dolor, vel dignissim augue.\n\nAliquam accumsan gravida turpis, sed feugiat ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sollicitudin diam ac tellus varius, ac tincidunt mauris laoreet. Aliquam ipsum enim, finibus eget est eget, tristique tristique urna. Phasellus vulputate venenatis magna, nec eleifend purus faucibus vitae. Curabitur id erat purus. Suspendisse luctus nec ante convallis eleifend. Ut ac nisl congue, tincidunt diam eget, ornare quam.\n\nAliquam accumsan gravida turpis, sed feugiat ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sollicitudin diam ac tellus varius, ac tincidunt mauris laoreet. Aliquam ipsum enim, finibus eget est eget, tristique tristique urna. Phasellus vulputate venenatis magna, nec eleifend purus faucibus vitae. Curabitur id erat purus. Suspendisse luctus nec ante convallis eleifend. Ut ac nisl congue, tincidunt diam eget, ornare quam.',
                        coversUrl: [
                            'https://retaildesignblog.net/wp-content/uploads/2012/02/YOUD-beauty-center-All-In-Living-Rotterdam-720x480.jpg',
                            'https://www.katiavelo.com.br/wp-content/uploads/2018/07/1-51.jpg',
                            'https://informa.life/wp-content/uploads/2019/11/Revista-Sul-Life-5-Charllene.jpg',
                        ],
                        imageUrl:
                            'https://dicasdemassagem.com/wp-content/uploads/beneficios-da-massagem-com-pedras-quentes.jpg',
                    },
                    {
                        name: 'Massagem com pedras nórdicas direto da Noruega',
                        id: this.generateGuid(),
                        provider: {name: p.name, id: this.generateGuid()},
                        price: 49.99,
                        rating: 3.7765,
                        description:
                            'Aliquam accumsan gravida turpis, sed feugiat ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sollicitudin diam ac tellus varius, ac tincidunt mauris laoreet. Aliquam ipsum enim, finibus eget est eget, tristique tristique urna. Phasellus vulputate venenatis magna, nec eleifend purus faucibus vitae. Curabitur id erat purus. Suspendisse luctus nec ante convallis eleifend. Ut ac nisl congue, tincidunt diam eget, ornare quam.\n\nNunc sollicitudin magna nec ante tempus blandit. Sed sit amet ipsum ut velit pretium maximus. Praesent a tortor faucibus, faucibus nisl in, convallis mi. Proin et tellus consequat, interdum urna a, iaculis est. Donec vulputate mi nulla, sit amet aliquet metus porttitor non. Etiam ipsum nulla, euismod sit amet finibus vitae, hendrerit interdum dolor. Phasellus lacus quam, vestibulum quis lectus pellentesque, feugiat hendrerit odio. Etiam sit amet tincidunt dolor, vel dignissim augue.\n\nAliquam accumsan gravida turpis, sed feugiat ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sollicitudin diam ac tellus varius, ac tincidunt mauris laoreet. Aliquam ipsum enim, finibus eget est eget, tristique tristique urna. Phasellus vulputate venenatis magna, nec eleifend purus faucibus vitae. Curabitur id erat purus. Suspendisse luctus nec ante convallis eleifend. Ut ac nisl congue, tincidunt diam eget, ornare quam.\n\nAliquam accumsan gravida turpis, sed feugiat ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sollicitudin diam ac tellus varius, ac tincidunt mauris laoreet. Aliquam ipsum enim, finibus eget est eget, tristique tristique urna. Phasellus vulputate venenatis magna, nec eleifend purus faucibus vitae. Curabitur id erat purus. Suspendisse luctus nec ante convallis eleifend. Ut ac nisl congue, tincidunt diam eget, ornare quam.',
                        coversUrl: [
                            'https://retaildesignblog.net/wp-content/uploads/2012/02/YOUD-beauty-center-All-In-Living-Rotterdam-720x480.jpg',
                            'https://www.katiavelo.com.br/wp-content/uploads/2018/07/1-51.jpg',
                            'https://informa.life/wp-content/uploads/2019/11/Revista-Sul-Life-5-Charllene.jpg',
                        ],
                        imageUrl:
                            'https://dicasdemassagem.com/wp-content/uploads/beneficios-da-massagem-com-pedras-quentes.jpg',
                    },
                ],
            });
        },
    );

    create(data: ProviderInput): Promise<IProvider> {
        return this.mockRequest(data).then(() => ({
            ...data,
            id: this.generateGuid(),
        }));
    }

    favoriteToggle(providerId: IdType): Promise<void> {
        return this.mockRequest(providerId);
    }

    get(providerId: IdType): Promise<IProvider | null> {
        return later(this.providersMock[0]);
    }

    getFavorites(): Promise<IProvider[]> {
        const values = this.providersMock.slice(0, 2);
        return later(values, 2000);
    }

    search(
        term?: StringNullable,
        location?: Nullable<Location>,
    ): Promise<IProvider[]> {
        const values = this.providersMock.filter(
            p => !term || p.name.toLowerCase().includes(term?.toLowerCase()),
        );
        return later(values, 2000);
    }
}
