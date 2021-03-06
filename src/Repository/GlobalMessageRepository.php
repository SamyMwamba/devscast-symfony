<?php

namespace App\Repository;

use App\Entity\GlobalMessage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GlobalMessage|null find($id, $lockMode = null, $lockVersion = null)
 * @method GlobalMessage|null findOneBy(array $criteria, array $orderBy = null)
 * @method GlobalMessage[]    findAll()
 * @method GlobalMessage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GlobalMessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GlobalMessage::class);
    }

    /**
     * @return mixed
     * @author bernard-ng <ngandubernard@gmail.com>
     */
    public function findLastMessage()
    {
        try {
            return $this->createQueryBuilder('g')
                ->where("g.state = :state")
                ->orderBy("g.created_at", "DESC")
                ->setParameter("state", "1")
                ->setMaxResults(1)
                ->getQuery()
                ->getOneOrNullResult();
        } catch (\Exception $e) {
            return null;
        }
    }
}
