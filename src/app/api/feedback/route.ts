import { Prisma, PrismaClient } from '@prisma/client';

interface query {
  email?: string;
  phone?: string;
  message?: string;
  Language?: LanguageType;
  overallRating: reactionType;
  recp?: reactionType;
  emrg?: reactionType;
  bill?: reactionType;
  cash?: reactionType;
  care?: reactionType;
  labo?: reactionType;
  oprt?: reactionType;
  radl?: reactionType;
}

type LanguageType = 'EN' | 'FR' | 'AR';

type reactionType =
  | 'ABSOLUTELY_DISATISFIED'
  | 'DISATISFIED'
  | 'OK'
  | 'SATISFIED'
  | 'EXTREMELY_SATISFIED';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { query }: { query: query } = await req.json();

  const newFeedback = await prisma.feedback.create({
    data: {
      email: query.email,
      phone: query.phone,
      message: query.message,
      Language: 'EN',
      overallRating: query.overallRating,
      recp: query.recp,
      emrg: query.emrg,
      bill: query.bill,
      cash: query.cash,
      care: query.care,
      labo: query.labo,
      oprt: query.oprt,
      radl: query.radl,
    },
  });
  return Response.json({ query });
}
