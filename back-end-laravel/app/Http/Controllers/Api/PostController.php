<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Http\Requests\EditPostRequest;
use App\Models\Post;
use Exception;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){

        $post = Post::all();
        //return Json Response
        return response()->json([
            'results' => $post
        ], 200);


        // try {
        //     $query = Post::query();
        //     $perPage = 1;
        //     $page = $request->input('page', 1);
        //     $search = $request->input('search');
        //     if ($search) {
        //         $query->whereRaw("titre LIKE '%" . $search . "%'");
        //     }

        //     $total = $query->count();

        //     $result = $query->offset(($page - 1) * $perPage)->limit
        //     ($perPage)->get();

        //     return response()->json([
        //         'status_code' => 200,
        //         'status_message' => 'les post recuperer',
        //          'current_page'=>$page,
        //       'last_page'=>ceil($total /$perPage),
        //          'items'=> $result
        //     ]);
        // } catch (Exception $e) {
        //     return response()->json($e);
        //     //throw $th;
        // }
    }
    public function store( CreatePostRequest $request){
      try {
         $post = new Post();



       $post->titre = $request->titre;
       $post->prix = $request->prix;
       $post->description = $request->description;
       $post->image = $request->image;

       $post->save();

       return response()->json([
            'status_code' =>200,
            'status_message'=>'le post a été ajouter',
            'data' =>$post
            ]);
      } catch (Exception $e) {
        //throw $th;
        return response()->json($e);
      }

    }
    public function update(EditPostRequest $request,$id)
    {
       try {
            $post = Post::find($id);

            $post->titre = $request->titre;
            $post->prix = $request->prix;
            $post->description = $request->description;
            $post->image = $request->image;


            $post->save();
            return response()->json([
                'status_code' => 200,
                'status_message' => 'le post a été ajouter',
                'data' => $post
            ]);
        //code...
       } catch (Exception $e) {
        return response()->json($e);
        //throw $th;
       }
    }
    public function delete(Post $post){

        try {
            if($post){}
            $post->delete();
            //code...
            return response()->json([
                'status_code' => 200,
                'status_message' => 'le post a été suprimer',
                'data' => $post
            ]);
        } catch (Exception $e) {
            return response()->json($e);
            //throw $th;
        }
    }
}
