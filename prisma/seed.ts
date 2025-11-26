import { PrismaClient } from '../generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Seeding database...');

    // Clear existing data
    await prisma.product.deleteMany();

    // Create sample products
    const products = await prisma.product.createMany({
        data: [
            {
                name: 'Laptop HP Pavilion',
                price: 899.99,
                available: true,
            },
            {
                name: 'Mouse Logitech MX Master 3',
                price: 99.99,
                available: true,
            },
            {
                name: 'Teclado Mecánico Corsair K95',
                price: 199.99,
                available: true,
            },
            {
                name: 'Monitor Samsung 27" 4K',
                price: 449.99,
                available: true,
            },
            {
                name: 'Webcam Logitech C920',
                price: 79.99,
                available: true,
            },
            {
                name: 'Auriculares Sony WH-1000XM4',
                price: 349.99,
                available: true,
            },
            {
                name: 'SSD Samsung 1TB',
                price: 129.99,
                available: true,
            },
            {
                name: 'RAM Corsair 16GB DDR4',
                price: 89.99,
                available: true,
            },
            {
                name: 'Tarjeta Gráfica NVIDIA RTX 3060',
                price: 499.99,
                available: false,
            },
            {
                name: 'Procesador Intel i7-12700K',
                price: 399.99,
                available: true,
            },
        ],
    });

    console.log(`✅ Created ${products.count} products`);
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
