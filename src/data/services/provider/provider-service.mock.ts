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
        return this.mockRequest(providerId).then(() => null);
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
