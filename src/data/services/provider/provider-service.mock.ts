import {later, MockService} from '../base-mock';
import {ProviderService} from '../../../domain/use-cases/provider';
import {StringNullable} from '../../../shared/types/general';
import {IProvider, ProviderInput} from '../../../domain/entities/provider';
import {IdType} from '../../../shared/store/types';

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
            imageUrl:
                'https://scontent.fvix2-1.fna.fbcdn.net/v/t1.18169-9/17362078_416455765373454_7938925284051333312_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XeeGf65oHG8AX9Kl8pP&_nc_ht=scontent.fvix2-1.fna&oh=4f7762fdeab0387a33c446b7796859c3&oe=60D28783',
        },
        {
            name: 'Salão e Barbearia Impactus',
            imageUrl:
                'https://scontent.fvix2-1.fna.fbcdn.net/v/t1.18169-9/20914700_825582834289609_5188453259434632029_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=_dsGzwa4zMUAX9su6MK&_nc_ht=scontent.fvix2-1.fna&oh=ca99e73be54c2abe93a077f15141605a&oe=60D40A01',
        },
        {
            name: 'Lotus Beauty',
            imageUrl:
                'https://d1k8hez1mxkuxw.cloudfront.net/external_data/130670828-s10/166062220.jpeg',
        },
        {
            name: 'Dinastia da Barba Barbearia',
            imageUrl:
                'https://scontent.fvix2-1.fna.fbcdn.net/v/t1.18169-9/17362078_416455765373454_7938925284051333312_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XeeGf65oHG8AX9Kl8pP&_nc_ht=scontent.fvix2-1.fna&oh=4f7762fdeab0387a33c446b7796859c3&oe=60D28783',
        },
    ];
    private readonly providersMock: IProvider[] = this.basicProvidersMock.map(
        p => ({
            id: this.generateGuid(),
            name: p.name,
            imageUrl: p.imageUrl,
            averageRating: Math.random() * 5,
            category: Math.ceil(Math.random() * 5),
        }),
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
        return this.mockRequest(providerId).then(() => null);
    }

    getFavorites(): Promise<IProvider[]> {
        const values = this.providersMock.slice(0, 2);
        return later(2000, values);
    }

    search(term?: StringNullable): Promise<IProvider[]> {
        const values = this.providersMock.filter(
            p => !term || p.name.toLowerCase().includes(term?.toLowerCase()),
        );
        return later(2000, values);
    }
}
