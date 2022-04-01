import { Movie } from "../entity/Movie"
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  async createMovie(
    @Arg("title") title: string,
    @Arg("minutes", () => Int) minutes: number
    ) {
    await Movie.insert({ title, minutes });
    return true;
  }

  @Query(() => [Movie])
  movies() {
    return Movie.find();
  }
}